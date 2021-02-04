import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, CLEAR_SERVICE_FIELD, EDIT_SERVICE, CHANGE_FILTER_FIELD } from './actionTypes';

export function addService(name, price, id) {
  return {type: ADD_SERVICE, payload: {name, price, id}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function clearServiceField() {
    return {type: CLEAR_SERVICE_FIELD}
}

export function editService(name, price, id) {
    return {type: EDIT_SERVICE, payload: {name, price, id}}
}

export function changeFilterField(value) {
    return {type: CHANGE_FILTER_FIELD, payload: value}
}