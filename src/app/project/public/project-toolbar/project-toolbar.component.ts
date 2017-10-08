import { ProjectApiService } from './../../../common/api/project-api.service';
import { Project } from 'app/common/entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-toolbar',
  templateUrl: './project-toolbar.component.html',
  styleUrls: ['./project-toolbar.component.scss']
})
export class ProjectToolbarComponent implements OnInit {

  projects: Project[];
  activeProjectId;
  activeProject;

  _navs;

  constructor(private projectApi: ProjectApiService) { }

  ngOnInit() {
    this.projectApi.getAllOfPage().subscribe(
      data => {
        this.projects = data.content;
        this.activeProjectId = this.projects && this.projects.length > 0 ? this.projects[0].id : null;
        this.onSelectChange();
      }
    );
  }

  updateNavs() {
    if (this.activeProject) {
      this._navs = [
        { title: '任务', routerLink: ['/project', this.activeProject.id, 'task'] },
        { title: '需求', routerLink: ['/project', this.activeProject.id, 'requirement'] },
        { title: '问题', routerLink: ['/project', this.activeProject.id, 'issue'] },
        { title: '构建', routerLink: ['/project', this.activeProject.id, 'build'] },
        { title: '测试', routerLink: ['/project', this.activeProject.id, 'test'] },
        { title: '团队', routerLink: ['/project', this.activeProject.id, 'team'] },
        { title: '动态', routerLink: ['/project', this.activeProject.id, 'activity'] },
        { title: '文档', routerLink: ['/project', this.activeProject.id, 'docLib'] },
        { title: '产品', routerLink: ['/project', this.activeProject.id, 'product'] },
        { title: '概况', routerLink: ['/project', this.activeProject.id, 'overview'] },
      ];
    }
  }

  onSelectChange() {
    this.activeProject = this.projects.find(it => it.id == this.activeProjectId);
    this.updateNavs();
  }
}
