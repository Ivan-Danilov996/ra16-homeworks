import { CHANGE_SERVICE_FIELD, CLEAR_SERVICE_FIELD, EDIT_SERVICE } from '../actions/actionTypes'

const initialState = {
    name: '',
    price: '',
    id: ''
};

export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const { name, value } = action.payload;
            return { ...state, [name]: value };
        case CLEAR_SERVICE_FIELD:
            return { ...state, name: '', price: '', id: '' };
        case EDIT_SERVICE:
            return { ...state, name: action.payload.name, price: action.payload.price, id: action.payload.id };
        default:
            return state;
    }
}