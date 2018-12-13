import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromLaunches from './launches/launches.reducer';
import * as fromStatuses from './statuses/statuses.reducer';

export interface State {

  launches: fromLaunches.State;
  statuses: fromStatuses.State;
}

export const reducers: ActionReducerMap<State> = {

  launches: fromLaunches.reducer,
  statuses: fromStatuses.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
