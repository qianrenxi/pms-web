import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.scss']
})
export class ChangeLogComponent implements OnInit {
  @Input() targetType;
  @Input() targetId;

  constructor() { }

  ngOnInit() {
  }

}
