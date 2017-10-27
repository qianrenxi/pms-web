import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-doc-lib-detail',
  template: `
    <div class="my-4 mx-3 bg-white">
      <router-outlet></router-outlet>
    </div>`,
  styles: []
})
export class DocLibDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
