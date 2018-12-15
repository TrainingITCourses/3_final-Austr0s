import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContentComponent } from './home-content/home-content.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeContentComponent]
})
export class HomeModule {}
