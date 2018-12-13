import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StateComponent } from './state/state.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { LaunchListComponent } from './home/launch-list/launch-list.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store/reducers';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LaunchesEffects } from './store/reducers/launches/launches.effects';
import { StatusesEffects } from './store/reducers/statuses/statuses.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StateComponent,
    HeaderComponent,
    DetailComponent,
    LaunchListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers,{ metaReducers }),
    !environment.production? StoreDevtoolsModule.instrument():[],
    EffectsModule.forRoot([LaunchesEffects, StatusesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
