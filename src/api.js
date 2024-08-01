import axios from "axios";

// Configuración de la API de JSONPlaceholder
const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getWeather = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
