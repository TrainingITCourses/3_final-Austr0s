import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatuesContentComponent } from './statues-content/statues-content.component';

const routes: Routes = [
  {
    path: '',
    component: StatuesContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusesRoutingModule {}
