import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  // TODO: CONFIGURE CHANGEDETECTIONSTRATEGY.ONPUSH
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent{
  title = 'speed';
  constructor() {}

}
