import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';

@Component({
  selector: 'app-launches-content',
  templateUrl: './launches-content.component.html',
  styleUrls: ['./launches-content.component.css']
})
export class LaunchesContentComponent implements OnInit {
  public statusId: number;
  public launches: any[];
  public counter = {titulo:'Lanzamientos encontrados en Launches', length: 0};
  public page = "Status";
  
  constructor(private store:Store<State>) {}

  ngOnInit() {
    this.store.select('launches').subscribe(data => {
      this.launches = data.launches;
      this.counter = {...this.counter, length:this.launches.length};
    });

  }

  filterByDate() {
    this.launches = this.launches.filter(l => new Date(l.windowstart) > new Date()).sort((a, b) => {
      return a.isostart - b.isostart;
    });
    // Spread:
    this.launches = [...this.launches];
    this.counter = {...this.counter, titulo: 'Lanzamientos encontrados en Launches y Ordenados por Fecha.'};
  }
}
