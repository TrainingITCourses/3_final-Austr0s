import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  public statusId = 1;
  constructor(private activatedRoute: ActivatedRoute) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
   }

  ngOnInit() {
  }

}
