import { ActivatedRoute, Router } from '@angular/router';
import { ProjectApiService } from 'app/common/api';
import { Project, DocLib } from 'app/common/entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-project-doc-lib',
  templateUrl: './project-doc-lib.component.html',
  styleUrls: ['./project-doc-lib.component.scss']
})
export class ProjectDocLibComponent implements OnInit {

  project: Project;
  docLibs: DocLib[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectApi: ProjectApiService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {project: Project}) => {
      this.project = data.project;
      this.loadData();
    })
  }

  loadData() {
    this.projectApi.getDocLibs(this.project.id).subscribe(
      libs => {
        this.docLibs = libs;
      }
    )
  }

}
