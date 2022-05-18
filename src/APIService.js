import {cityMock} from "./searchMockData";

export const getCityData = (cityName) => {
    // fetch(`api/cityData/${cityName}`)
    return new Promise (resolve => resolve(cityMock));
}