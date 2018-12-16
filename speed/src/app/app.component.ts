import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';


@Component({
  // GLOBAL ONPUSH:
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent{
  title = 'Angular Speed: aplicaciones de alto rendimiento';
  appVersion = '1.1';
  constructor(swUpdate: SwUpdate) {
    if(swUpdate.isEnabled){
      swUpdate.available.subscribe(
        (event: UpdateAvailableEvent) => {
          const msg = 'Hay una nueva versión de la App disponible. ¿Deseas instalarla?';
          if(confirm(msg)) window.location.reload();
        }
      );
    }
  }
}
