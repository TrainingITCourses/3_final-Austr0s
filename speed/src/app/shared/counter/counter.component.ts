import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() public counter = { titulo: 'Counter', length: 0};
  isCountered = false;
  constructor() { }

  ngOnInit() {
    this.isCountered = (this.counter.titulo !== 'Counter');
  }
}
