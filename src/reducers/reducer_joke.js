import { GET_JOKE } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
    case GET_JOKE:
        return action.payload.data
}
    return state;
}