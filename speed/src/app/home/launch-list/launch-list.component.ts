import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {
  @Input() public launches: any[];
  @Input() public statuses: any[];
  constructor() { }

  ngOnInit() {
  }

}
