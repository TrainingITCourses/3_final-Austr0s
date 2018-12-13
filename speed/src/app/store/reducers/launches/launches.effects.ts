import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {ApiService} from '../../api.service';
import { LaunchesActionTypes, LaunchesLoaded } from './launches.actions';

@Injectable()
export class LaunchesEffects {

  @Effect()
  public load$ = this.actions$
    .pipe(
      ofType(LaunchesActionTypes.LoadLaunches),
      mergeMap(() => this.api.getLaunches().pipe(map(launchType => new LaunchesLoaded(launchType))))
    );
    constructor(private actions$: Actions, private api: ApiService) {}
}
