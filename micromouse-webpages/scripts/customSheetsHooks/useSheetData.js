import { useState, useEffect } from 'react';
import { callSheetAPI } from './sheetAPI.js';

/**
 * Custom hook for fetching and caching Google Sheets data
 * @param {string} sheetName - The name of the sheet to fetch data from
 * @param {function} processData - Optional function to process the data after fetching
 * @returns {object} - Object containing data, loading state, error state, and refresh function
 */
export const useSheetData = (sheetName, processData = null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const cacheKey = `sheetData_${sheetName}`;
            
            // Check if data exists in sessionStorage first
            const cachedData = sessionStorage.getItem(cacheKey);
            if (cachedData) {
                try {
                    const parsedData = JSON.parse(cachedData);
                    const processedData = processData ? processData(parsedData) : parsedData;
                    setData(processedData);
                    setLoading(false);
                    return; // Exit early if we have cached data
                } catch (parseError) {
                    console.warn('Error parsing cached data, fetching fresh data:', parseError);
                    // Continue to API call if cached data is corrupted
                }
            }
            
            // Fetch from API using the reusable function
            const fetchedData = await callSheetAPI(sheetName);
            
            // Store raw data in sessionStorage for future use
            sessionStorage.setItem(cacheKey, JSON.stringify(fetchedData));
            
            // Process the data if a processor function is provided
            const processedData = processData ? processData(fetchedData) : fetchedData;
            
            setData(processedData);
        } catch (err) {
            console.error(`Error fetching data for sheet ${sheetName}:`, err);
            setError(err.message);
            // Fallback to empty array on error
            setData([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (sheetName) {
            fetchData();
        }
    }, [sheetName]);

    return {
        data,
        loading,
        error,
        refresh: fetchData
    };
}; 