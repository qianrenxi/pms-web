import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { Project } from '../entity/project';

@Component({
  selector: 'pms-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  activeProject: Project;
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.activeProject = new Project();

    this.projectService.getProjects().subscribe(
      projects => {
        this.projects = projects;
        this.activeProject = projects.length > 0 ? projects[0] : this.activeProject;
      },
      error => {}
    );
  }

}
