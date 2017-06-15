import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequirementService } from '../../service/requirement.service';
import { Requirement } from '../../entity/requirement';

@Component({
  selector: 'pms-requirement-form',
  templateUrl: './requirement-form.component.html',
  styleUrls: ['./requirement-form.component.scss']
})
export class RequirementFormComponent implements OnInit {
  properties = {};
  requirement: Requirement = new Requirement();

  ueditorConfit = {
    toolbars: [['FullScreen', 'Source', 'Undo', 'Redo', 'Bold' ]],
    autoClearinitialContent: true,
    wordCount: false
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requirementService: RequirementService
  ) { }

  ngOnInit() {
    this.requirementService.getProperties().subscribe(
      properties => this.properties = properties
    );
  }

  backup() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
