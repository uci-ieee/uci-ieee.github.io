import { callSheetAPI } from '../scripts/customSheetsHooks/sheetAPI.js';

const SHEET_NAMES = ['Git Tutorial', 'Firmware Tutorial'];
const sheetTitle = document.getElementById('sheet-title');
const sheetStatus = document.getElementById('sheet-status');
const sheetContent = document.getElementById('sheet-content');
const sheetLayout = document.getElementById('sheet-layout');
const sheetSidebar = document.getElementById('sheet-sidebar');
const sheetBookmarkList = document.getElementById('sheet-bookmark-list');

const requestedSheet = new URLSearchParams(window.location.search).get('sheet');
const sheetName = SHEET_NAMES.includes(requestedSheet) ? requestedSheet : null;

function rowsFromResponse(response) {
    if (Array.isArray(response)) {
        return response;
    }

    if (Array.isArray(response?.rows)) {
        return response.rows;
    }

    if (Array.isArray(response?.data)) {
        return response.data;
    }

    if (Array.isArray(response?.data?.rows)) {
        return response.data.rows;
    }

    return [];
}

function valueFor(row, ...fields) {
    const normalizedFields = fields.map((field) => field.toLowerCase());
    const key = Object.keys(row).find((name) => normalizedFields.includes(name.trim().toLowerCase()));
    const value = key ? row[key] : '';

    if (value && typeof value === 'object') {
        return value.url || value.src || '';
    }

    return typeof value === 'string' ? value.trim() : value || '';
}

function appendText(parent, tagName, value, className = '') {
    const element = document.createElement(tagName);
    element.textContent = value;
    if (className) {
        element.className = className;
    }
    parent.append(element);
}

function appendImage(parent, source) {
    const image = document.createElement('img');
    image.className = 'sheet-block__image';
    image.src = source;
    image.alt = '';
    image.loading = 'lazy';
    image.addEventListener('error', () => image.remove());
    parent.append(image);
}

function renderRow(row) {
    const header = valueFor(row, 'header');
    const text = valueFor(row, 'text');
    const image = valueFor(row, 'image', 'images');

    if (!header && !text && !image) {
        return;
    }

    const block = document.createElement('article');
    block.className = image && text ? 'sheet-block sheet-block--split' : 'sheet-block';

    if (image && text) {
        const copy = document.createElement('div');
        if (header) {
            appendText(copy, 'h3', header, 'sheet-block__caption');
        }
        appendText(copy, 'p', text);
        block.append(copy);
        appendImage(block, image);
        return block;
    }

    if (header && text) {
        appendText(block, 'h3', header, 'sheet-block__caption');
        appendText(block, 'p', text);
    } else if (header) {
        appendText(block, 'h1', header);
    } else if (text) {
        appendText(block, 'p', text);
    } else {
        appendImage(block, image);
    }

    return block;
}

async function renderSheet() {
    if (!sheetName) {
        sheetTitle.textContent = 'Module not found';
        sheetStatus.textContent = 'Choose a module from the Modules menu.';
        return;
    }

    sheetTitle.textContent = sheetName;

    try {
        const response = await callSheetAPI(sheetName);
        const rows = rowsFromResponse(response);

        rows.forEach((row, index) => {
            const block = renderRow(row);
            if (block) {
                const header = valueFor(row, 'header');
                if (header) {
                    block.id = `sheet-row-${index + 1}`;
                    const item = document.createElement('li');
                    item.className = 'nav-item';
                    const link = document.createElement('a');
                    link.className = 'nav-link';
                    link.href = `#${block.id}`;
                    link.textContent = header;
                    item.append(link);
                    sheetBookmarkList.append(item);
                }
                sheetContent.append(block);
            }
        });

        if (sheetBookmarkList.children.length) {
            sheetSidebar.hidden = false;
            sheetLayout.classList.remove('sheet-layout--no-bookmarks');
        }

        // Anchors become available only after the spreadsheet request finishes.
        const anchor = document.getElementById(window.location.hash.slice(1));
        if (anchor && sheetContent.contains(anchor)) {
            anchor.scrollIntoView();
        }

        if (!sheetContent.children.length) {
            sheetStatus.textContent = 'This module does not have any content yet.';
        }
    } catch (error) {
        sheetStatus.textContent = `Unable to load this module: ${error.message}`;
    }
}

renderSheet();
