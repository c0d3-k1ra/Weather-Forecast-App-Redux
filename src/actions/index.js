import axios from 'axios';

const API_KEY = '1f65a9613f1a4db1f08845f854782e2a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchweather = (city) => {
    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request,
    };
}