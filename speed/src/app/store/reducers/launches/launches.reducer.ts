import { LaunchesActions, LaunchesActionTypes } from './launches.actions';


export interface State {
  launches: any[],
  loading: boolean
}

export const initialState: State = {
  launches: [],
  loading: false
};

export function reducer(state = initialState, action: LaunchesActions): State {
  switch (action.type) {
    case LaunchesActionTypes.LoadLaunches:
      return {...state, loading: true};
    case LaunchesActionTypes.LaunchesLoaded:
      return {launches: action.payload, loading: false};
    default:
      return state;
  }
}
