import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import serviceListReducer from '../reducers/serviceList';
import serviceReducer from '../reducers/service'
import createSagaMiddleware from 'redux-saga';
import saga from '../sagas';

const reducers = combineReducers({
  serviceList: serviceListReducer,
  serviceReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(saga);

export default store