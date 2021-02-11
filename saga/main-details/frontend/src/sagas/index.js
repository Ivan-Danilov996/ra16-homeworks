import { takeLatest, put, spawn, debounce, retry } from 'redux-saga/effects';
import { fetchServicesSuccess, fetchServicesFailure, fetchServiceSuccess, fetchServiceFailure } from '../actions/actionCreators';
import { FETCH_SERVICES_REQUEST, FETCH_SERVICE_REQUEST } from '../actions/actionTypes';

const fetchServices = async () => {
    const response = await fetch(`http://localhost:7070/api/services`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}


// worker
function* handleFetchServicesRequest() {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, fetchServices);
        yield put(fetchServicesSuccess(data));
    } catch (e) {
        yield put(fetchServicesFailure(e.message));
    }
}

// watcher
function* watchFetchServicesRequest() {
    yield takeLatest(FETCH_SERVICES_REQUEST, handleFetchServicesRequest);
}



const fetchService = async (id) => {
    const response = await fetch(`http://localhost:7070/api/services/${id}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}


// worker
function* handleFetchServiceRequest(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, fetchService, action.payload);
        yield put(fetchServiceSuccess(data));
    } catch (e) {
        yield put(fetchServiceFailure(e.message));
    }
}

// watcher
function* watchFetchServiceRequest() {
    yield takeLatest(FETCH_SERVICE_REQUEST, handleFetchServiceRequest);
}

export default function* saga() {
    yield spawn(watchFetchServicesRequest);
    yield spawn(watchFetchServiceRequest)
}