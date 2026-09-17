/**
 * Calls the Google Sheets API with a POST request to retrieve data from a specific sheet
 * @param {string} sheetName - The name of the sheet to retrieve data from
 * @returns {Promise<Array>} - Promise that resolves to the sheet data as an array of objects
 */
export const callSheetAPI = async (sheetName) => {
    try {
        // Use GET request with query parameters to avoid CORS issues
        const url = new URL("https://script.google.com/macros/s/AKfycbwHX_hKhKc9KUfxkewUf6WAlWlnxIFZ5jmsAtROT9LfV7bYYR_8PdBpicGAAZ4BNcy0Nw/exec");
        url.searchParams.append('sheetName', sheetName);
        
        const response = await fetch(url.toString(), {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Check if the response contains an error
        if (data.error) {
            throw new Error(data.error);
        }

        return data;
    } catch (error) {
        console.error(`Error calling sheet API for ${sheetName}:`, error);
        throw error;
    }
}; 