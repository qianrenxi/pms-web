import { DocLibApiService } from 'app/common/api';
import { NzMessageService, NzModalSubject } from 'ng-zorro-antd';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-doclib-add-dialog',
  templateUrl: './doclib-add-dialog.component.html',
  styleUrls: ['./doclib-add-dialog.component.scss']
})
export class DoclibAddDialogComponent implements OnInit {

  @Input() productId;
  @Input() projectId;

  _form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private subject: NzModalSubject,
    private docLibApi: DocLibApiService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this._form = this.fb.group({
      type: [],
      productId: [],
      projectId: [],
      name: [],
      code: []
    });
  }

  getFormControl(name) {
    return this._form.controls[name];
  }

  markAsDirty() {
    for (let key of Object.keys(this._form.controls)) {
      this._form.controls[key].markAsDirty();
    }
  }

  onOk(event) {
    this.markAsDirty();

    if (this._form.invalid) {
      this.message.error('表单信息有误，请更正后重试');
      return;
    }

    let value = this._form.value;
    // value['']
    this.docLibApi.create(value).subscribe(
      ok => {
        this.message.success('添加文档库成功');
        this.subject.destroy('onOk');
      },
      err => {
        this.message.error('保存失败');
      }
    );
  }

  onCancel(event) {
    this.subject.destroy('onCancel');
  }

}
