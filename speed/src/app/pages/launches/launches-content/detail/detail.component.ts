import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detailId: number;
  public launch;

  constructor(private store: Store<State>, private activatedRoute: ActivatedRoute) {
    // this.detailId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    this.store.select('launches').subscribe(launchesState => {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.launch = launchesState.launches.filter(
        l => l.id.toString() === id
      )[0];
    });

    console.log(this.launch);
  }

}
