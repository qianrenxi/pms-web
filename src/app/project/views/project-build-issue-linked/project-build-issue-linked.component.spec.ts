import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBuildIssueLinkedComponent } from './project-build-issue-linked.component';

describe('ProjectBuildIssueLinkedComponent', () => {
  let component: ProjectBuildIssueLinkedComponent;
  let fixture: ComponentFixture<ProjectBuildIssueLinkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBuildIssueLinkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBuildIssueLinkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
