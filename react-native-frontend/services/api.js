import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000';  // Replace with your Flask backend URL

export const getGoogleAPI = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/google-api`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const postLlamaAPI = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/llama-api`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
