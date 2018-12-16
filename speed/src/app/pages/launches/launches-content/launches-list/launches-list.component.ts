import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent implements OnInit {
  @Input() public launches: any[];
  @Input() public statuses: any[];
  @Input() public statusId: number;
  constructor() { }

  ngOnInit() {
  }

}
