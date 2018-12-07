import { combineEpics, ofType } from 'redux-observable';
import { tap, ignoreElements } from 'rxjs/operators';
import { REHYDRATE } from 'redux-persist';

const testEpic = (action$, state$) =>
  action$.pipe(
    ofType(REHYDRATE),
    tap(() => {
      console.log(state$);
    }),
    ignoreElements()
  );

export default combineEpics(testEpic);
