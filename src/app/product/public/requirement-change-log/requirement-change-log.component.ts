import { RequirementApiService } from './../../../common/api/requirement-api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pms-requirement-change-log',
  templateUrl: './requirement-change-log.component.html',
  styleUrls: ['./requirement-change-log.component.scss']
})
export class RequirementChangeLogComponent implements OnInit {

  @Input() requirementId;

  changeLog;

  constructor(private requirementApi: RequirementApiService) { }

  ngOnInit() {
    this.requirementApi.getChangeLog(this.requirementId).subscribe(
      result => {
        this.changeLog = result.changeLog
      },
      err => {

      }
    );
  }

}
