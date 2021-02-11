import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_REQUEST,
  FETCH_SERVICE_FAILURE,
  FETCH_SERVICE_SUCCESS
} from './actionTypes';

export function fetchServicesRequest() {
  return { type: FETCH_SERVICES_REQUEST };
}

export function fetchServicesFailure(errorText) {
  return { type: FETCH_SERVICES_FAILURE, payload: errorText };
}

export function fetchServicesSuccess(items) {
  return { type: FETCH_SERVICES_SUCCESS, payload: items }
}


export function fetchServiceRequest(id) {
  return { type: FETCH_SERVICE_REQUEST, payload: id };
}

export function fetchServiceFailure(errorText) {
  return { type: FETCH_SERVICE_FAILURE, payload: errorText };
}

export function fetchServiceSuccess(item) {
  return { type: FETCH_SERVICE_SUCCESS, payload: item }
}
