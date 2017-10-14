import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-test-issue-add',
  templateUrl: './test-issue-add.component.html',
  styleUrls: ['./test-issue-add.component.scss']
})
export class TestIssueAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSave(event) {
    let value = event.value;

    /* this.caseApi.create(value).subscribe(
      ok => {
        this.message.success('添加成功');
        this.toList();
      },
      err => {
        this.message.error('添加失败');
      }
    );*/
  }

  onCancel(event) {
    this.toList();
  }

  toList() {
    // this.router.navigate(['../'], { relativeTo: this.route });
  }

}
