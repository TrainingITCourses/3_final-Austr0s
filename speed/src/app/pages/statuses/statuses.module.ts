import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatuesContentComponent } from './statues-content/statues-content.component';
import { StatusesRoutingModule } from './statuses-routing.module';

@NgModule({
  imports: [CommonModule, StatusesRoutingModule],
  declarations: [StatuesContentComponent]
})
export class StatusesModule {}
