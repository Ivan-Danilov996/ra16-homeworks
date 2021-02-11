import { FETCH_SERVICE_REQUEST, FETCH_SERVICE_FAILURE, FETCH_SERVICE_SUCCESS } from '../actions/actionTypes'

const initialState = {
  items: null,
  loading: false,
  error: false,
  errorText: null
}

export default function serviceReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_SERVICE_FAILURE:
      const errorText = action.payload
      return {
        ...state,
        loading: false,
        error: true,
        errorText
      }
    case FETCH_SERVICE_SUCCESS:
      const item = action.payload
      return {
        ...state,
        loading: false,
        error: false,
        item
      }
    default:
      return state;
  }
}