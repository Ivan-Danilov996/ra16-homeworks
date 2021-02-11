import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import serviceListReducer from '../reducers/serviceList';
import serviceReducer from '../reducers/service'
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { fetchServicesEpic, fetchServiceEpic } from '../epics';

const reducers = combineReducers({
  serviceList: serviceListReducer,
  serviceReducer
});

const epic = combineEpics(
  fetchServicesEpic,
  fetchServiceEpic
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store