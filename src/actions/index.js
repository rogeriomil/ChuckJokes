import axios from 'axios';

//exporting action types
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const GET_JOKE = 'GET_JOKE';

const CATEGORY_URL = 'https://api.chucknorris.io/jokes/categories';
const JOKE_URL = 'https://api.chucknorris.io/jokes/random?category=';


export function fetchCategories() {
    const url = CATEGORY_URL;
    
    const request = axios.get(url);

    return {
        type: FETCH_CATEGORIES,
        payload: request
    }

}

export function getJoke(category) {
    const joke_url = `${JOKE_URL}${category}`;

    const jokeRequest = axios.get(joke_url);

    return {
        type: GET_JOKE,
        payload: jokeRequest
    }
}