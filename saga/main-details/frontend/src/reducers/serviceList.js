
import { FETCH_SERVICES_REQUEST, FETCH_SERVICES_FAILURE, FETCH_SERVICES_SUCCESS } from '../actions/actionTypes'

const initialState = {
  items: [],
  loading: false,
  error: false,
  errorText: null
}

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_SERVICES_FAILURE:
      const errorText = action.payload
      return {
        ...state,
        loading: false,
        error: true,
        errorText
      }
    case FETCH_SERVICES_SUCCESS:
      const items = action.payload
      return {
        ...state,
        loading: false,
        error: false,
        items
      }
    default:
      return state;
  }
}
