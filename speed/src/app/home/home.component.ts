import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/reducers';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public launches: any[];
  public statuses: any[];

  constructor(private store:Store<State>) { }

  ngOnInit() {
    // this.store.select('launches').subscribe(data => {
    //   this.launches = data.launches;
    //   console.log(this.launches);
    // });
    this.store.select('statuses').subscribe(data => {
      this.statuses = data.statuses;
      console.log(this.statuses);
    });
  }

}
