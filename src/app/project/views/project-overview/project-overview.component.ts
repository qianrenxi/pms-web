import { ProjectOperateDialogService } from './../../public/project-operate-dialog/project-operate-dialog.service';
import { Project } from 'app/common/entity';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {

  project: Project;

  constructor(private router: Router, private route: ActivatedRoute,
    private message: NzMessageService, private projectOperate: ProjectOperateDialogService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { project: Project }) => {
      this.project = data.project;
    });
  }

  start(event?) {
    this.projectOperate.openStart(this.project);
  }

  delay(event?) {
    this.projectOperate.openDelay(this.project);
  }

  pause(event?) {
    this.projectOperate.openPause(this.project);
  }

  close(event?) {
    this.projectOperate.openClose(this.project);
  }
}
