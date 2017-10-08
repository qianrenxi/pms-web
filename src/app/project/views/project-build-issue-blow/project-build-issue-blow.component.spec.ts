import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBuildIssueBlowComponent } from './project-build-issue-blow.component';

describe('ProjectBuildIssueBlowComponent', () => {
  let component: ProjectBuildIssueBlowComponent;
  let fixture: ComponentFixture<ProjectBuildIssueBlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBuildIssueBlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBuildIssueBlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
