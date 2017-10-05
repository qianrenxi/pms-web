import { Component, OnInit } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';

@Component({
  selector: 'pms-requirement-subdivide-dialog',
  templateUrl: './requirement-subdivide-dialog.component.html',
  styleUrls: ['./requirement-subdivide-dialog.component.scss']
})
export class RequirementSubdivideDialogComponent implements OnInit {

  constructor(private subject: NzModalSubject) { }

  ngOnInit() {
  }

  onSave(event) {}

  onCancel(event) {
    this.subject.destroy();
  }
}
