import { NzMessageService } from 'ng-zorro-antd';
import { BuildApiService } from 'app/common/api';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Build } from 'app/common/entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-build-view',
  templateUrl: './project-build-view.component.html',
  styleUrls: ['./project-build-view.component.scss']
})
export class ProjectBuildViewComponent implements OnInit {

  build: Build;

  _outletActived: number = 0;

  constructor(private router: Router, private route: ActivatedRoute,
    private buildApi: BuildApiService, private message: NzMessageService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { build: Build }) => {
      this.build = data.build;

      this.tabSelect(null, {requirement: ['requirement', {buildId: this.build.id}]});
    });
  }

  tabSelect(event, outlets) {
    this.router.navigate([{outlets: outlets}], {relativeTo: this.route});
  }
}
