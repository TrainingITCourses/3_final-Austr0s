import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LaunchesContentComponent } from './launches-content/launches-content.component';
import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesListComponent } from './launches-content/launches-list/launches-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailComponent } from './launches-content/detail/detail.component';

@NgModule({
  imports: [CommonModule, LaunchesRoutingModule, SharedModule],
  declarations: [LaunchesContentComponent, LaunchesListComponent, DetailComponent]
})
export class LaunchesModule {}
