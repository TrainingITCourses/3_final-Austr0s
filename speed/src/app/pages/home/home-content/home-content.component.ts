import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { LoadStatuses } from 'src/app/store/reducers/statuses/statuses.actions';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  public statuses: any[];
  public counter = {titulo:'Estados encontrados en Home', length: 0};
  public page = "Home";

  constructor(private store:Store<State>) { }

  ngOnInit() {
    this.store.select('statuses').subscribe(data => {
      this.statuses = data.statuses;
      this.counter = {...this.counter,length: this.statuses.length};
    });
  }

}
