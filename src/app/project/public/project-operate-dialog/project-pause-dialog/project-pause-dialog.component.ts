import { Project } from 'app/common/entity';
import { ProjectApiService } from 'app/common/api';
import { NzMessageService } from 'ng-zorro-antd';
import { NzModalSubject } from 'ng-zorro-antd';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-project-pause-dialog',
  templateUrl: './project-pause-dialog.component.html',
  styleUrls: ['./project-pause-dialog.component.scss']
})
export class ProjectPauseDialogComponent implements OnInit {

  @Input() project: Project;

  pauseForm: FormGroup;

  constructor(private subject: NzModalSubject, private fb: FormBuilder,
    private projectApi: ProjectApiService, private message: NzMessageService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.pauseForm = this.fb.group({
      remark: []
    });
  }

  onOk(event) {
    this.projectApi.pause(this.project.id, this.pauseForm.value).subscribe(
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
