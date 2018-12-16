import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesContentComponent } from './launches-content/launches-content.component';
import { DetailComponent } from './launches-content/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchesContentComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchesRoutingModule {}
