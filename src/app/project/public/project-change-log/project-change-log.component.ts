import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-project-change-log',
  templateUrl: './project-change-log.component.html',
  styleUrls: ['./project-change-log.component.scss']
})
export class ProjectChangeLogComponent implements OnInit {
  @Input() projectId: number;

  constructor() { }

  ngOnInit() {
  }

}
