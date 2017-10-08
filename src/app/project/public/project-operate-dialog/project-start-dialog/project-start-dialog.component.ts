import { NzMessageService } from 'ng-zorro-antd';
import { ProjectApiService } from 'app/common/api';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzModalSubject } from 'ng-zorro-antd';
import { Project } from 'app/common/entity';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-project-start-dialog',
  templateUrl: './project-start-dialog.component.html',
  styleUrls: ['./project-start-dialog.component.scss']
})
export class ProjectStartDialogComponent implements OnInit {

  @Input() project: Project;

  startForm: FormGroup;

  constructor(private subject: NzModalSubject, private fb: FormBuilder,
    private projectApi: ProjectApiService, private message: NzMessageService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.startForm = this.fb.group({
      remark: []
    });
  }

  onOk(event) {
    this.projectApi.start(this.project.id, this.startForm.value).subscribe(
      ok => {
        this.message.success('操作成功');
        this.subject.destroy('onOk');
      },
      err => {
        this.message.error('操作失败');
      }
    );
  }

  onCancel(event) {
    this.subject.destroy('onCancel');
  }

}
