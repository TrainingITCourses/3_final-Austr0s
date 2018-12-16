import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromLaunches from './launches/launches.reducer';
import * as fromStatuses from './statuses/statuses.reducer';
import { routerReducer } from '@ngrx/router-store';

export interface State {

  launches: fromLaunches.State;
  statuses: fromStatuses.State;
  router: any;
}

export const reducers: ActionReducerMap<State> = {

  launches: fromLaunches.reducer,
  statuses: fromStatuses.reducer,
  router: routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
