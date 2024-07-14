import axios from 'axios';
import LlamaAI from 'llamaai';

const API_BASE_URL = 'http://172.22.62.26:5000';
const apiToken = 'LL-79IdJlPh0w7P3iMsihM7PQbzwWaEiRHUAd5WFkHhrCXzSzv4uIeCQfrajsy7Hw0O';
const llamaAPI = new LlamaAI(apiToken);

// Build the Request
const apiRequestJson = {
    "messages": [
        {"role": "user", "content": "What is the weather like in Boston?"},
    ],
    "functions": [
        {
            "name": "get_current_weather",
            "description": "Get the current weather in a given location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The city and state, e.g. San Francisco, CA",
                    },
                    "days": {
                        "type": "number",
                        "description": "for how many days ahead you wants the forecast",
                    },
                    "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
                },
            },
            "required": ["location", "days"],
        }
    ],
    "stream": false,
    "function_call": "get_current_weather",
   };
 
   // Execute the Request
    llamaAPI.run(apiRequestJson)
      .then(response => {
        // Process response
      })
      .catch(error => {
        // Handle errors
      });
 

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
