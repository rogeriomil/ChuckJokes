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

//export function getJoke(category) {
  //  const joke_url = `${JOKE_URL}${category}`;

    //const jokeRequest = axios.get(joke_url);

    //return {
      //  type: GET_JOKE,
        //payload: jokeRequest
   // }
//}

const fetchJoke = (joke) => (dispatch, getState) => {
    dispatch({type: GET_JOKE, payload: joke})
    console.log(payload);
}

export const getJoke = (category) => (dispatch, getState) => {
  const joke_url = `${JOKE_URL}${category}`;

  const jokeRequest = axios.get(joke_url);

  dispatch(action({
    request: GET_JOKE,
    method: jokeRequest,
    callback: (err, joke) => {
      if (!err) {
        dispatch(fetchJoke(joke))
      }
    }
  }))
 }

