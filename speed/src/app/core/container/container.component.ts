import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { LoadLaunches } from 'src/app/store/reducers/launches/launches.actions';
import { LoadStatuses } from 'src/app/store/reducers/statuses/statuses.actions';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  subtitle = 'Ejercicio Final';
  constructor(private store: Store<State>) {}
  ngOnInit(): void {
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadStatuses());
  }

}
