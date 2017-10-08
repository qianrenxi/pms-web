import { ProjectApiService } from 'app/common/api';
import { NzModalSubject, NzMessageService } from 'ng-zorro-antd';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Project } from 'app/common/entity';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-project-close-dialog',
  templateUrl: './project-close-dialog.component.html',
  styleUrls: ['./project-close-dialog.component.scss']
})
export class ProjectCloseDialogComponent implements OnInit {

  @Input() project: Project;

  closeForm: FormGroup;

  constructor(private subject: NzModalSubject, private fb: FormBuilder,
    private projectApi: ProjectApiService, private message: NzMessageService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.closeForm = this.fb.group({
      remark: []
    });
  }

  onOk(event) {
    this.projectApi.close(this.project.id, this.closeForm.value).subscribe(
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
