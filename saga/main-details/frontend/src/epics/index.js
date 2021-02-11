// import { ofType } from 'redux-observable';
// import { ajax } from 'rxjs/ajax';
// import { map, switchMap, catchError } from 'rxjs/operators';
// import { FETCH_SERVICES_REQUEST, FETCH_SERVICE_REQUEST } from '../actions/actionTypes';
// import { fetchServicesSuccess, fetchServicesFailure, fetchServiceSuccess, fetchServiceFailure } from '../actions/actionCreators';
// import { of } from 'rxjs';

// export const fetchServicesEpic = action$ => action$.pipe(
//     ofType(FETCH_SERVICES_REQUEST),
//     switchMap(o => ajax.getJSON('http://localhost:7070/api/services').pipe(
//       map(o => fetchServicesSuccess(o)),
//       catchError(e => of(fetchServicesFailure("Произошла ошибка"))),
//   )),
// )


// export const fetchServiceEpic = action$ => action$.pipe(
//   ofType(FETCH_SERVICE_REQUEST),
//   map(o => {
//     console.log(o)
//     return o
//   }),
//   switchMap(o => ajax.getJSON(`http://localhost:7070/api/services/${o.payload}`).pipe(
//     map(o => fetchServiceSuccess(o)),
//     catchError(e => of(fetchServiceFailure("Произошла ошибка"))),
// )),
// )

