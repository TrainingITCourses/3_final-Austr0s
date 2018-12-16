import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { CoreRoutingModule } from './core-routing.module';
import { metaReducers, reducers } from './../store/reducers';
import { LaunchesEffects } from '../store/reducers/launches/launches.effects';
import { StatusesEffects } from '../store/reducers/statuses/statuses.effects';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './container/nav/nav.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    EffectsModule.forRoot([LaunchesEffects, StatusesEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [ContainerComponent, NavComponent],
  exports: [ContainerComponent]
})
export class CoreModule {}
