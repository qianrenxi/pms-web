import { Component } from '@angular/core';

@Component({
  selector: 'pms-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'pms';
}
