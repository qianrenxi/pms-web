import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'cui-menu-sub, cui-sub-menu, cui-submenu',
  templateUrl: './menu-sub.component.html',
  styleUrls: ['./menu-sub.component.scss'],
  providers: [{ provide: MenuItemComponent, useExisting: forwardRef(() => MenuSubComponent) }]
})
export class MenuSubComponent extends MenuItemComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;

  isOpen: boolean = false;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
