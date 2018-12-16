import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContentComponent } from './home-content/home-content.component';
import { StatusesListComponent } from './home-content/statuses-list/statuses-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  declarations: [HomeContentComponent, StatusesListComponent]
})
export class HomeModule {}
