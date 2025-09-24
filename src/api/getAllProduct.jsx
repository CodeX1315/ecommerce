
import axios from "axios";
    const BaseUrl = "https://api.escuelajs.co/api/v1";
export const getAllProduct = async () => {
    const URL = `${BaseUrl}/products`;
    try {
        const { data } = await axios.get(URL);
        return data;
    } catch (error) {
        return error;
    }
}

export const getProductCategory = async () => {
    const URL = `${BaseUrl}/categories`;
    try {
        const { data } = await axios.get(URL);
        return data;
    } catch (error) {
        return error;
    }
}