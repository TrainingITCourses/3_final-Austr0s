import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store/reducers';
import { LoadLaunches } from './store/reducers/launches/launches.actions';
import { LoadStatuses } from './store/reducers/statuses/statuses.actions';

@Component({
  // TODO: CONFIGURE CHANGEDETECTIONSTRATEGY.ONPUSH
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'speed';
  constructor(private store: Store<State>) {}
  ngOnInit(): void {
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadStatuses());
  }
}
