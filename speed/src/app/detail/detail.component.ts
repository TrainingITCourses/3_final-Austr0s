import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  statusId: string;
  constructor(private activatedRoute: ActivatedRoute) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.statusId = this.activatedRoute.snapshot.paramMap.get('statusId');
    console.log(this.statusId);
   }

  ngOnInit() {
  }

}
