import {cityMock} from "./searchMockData";
import axios from "axios";

export const getCityData = async (cityName) => {
    const response = await axios.get(`http://localhost:5000/city?name=${cityName}`, {
        method : "GET"
    });
    return response.data;
    // return new Promise (resolve => resolve(cityMock));
}