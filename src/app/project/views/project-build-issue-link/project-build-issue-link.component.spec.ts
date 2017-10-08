import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBuildIssueLinkComponent } from './project-build-issue-link.component';

describe('ProjectBuildIssueLinkComponent', () => {
  let component: ProjectBuildIssueLinkComponent;
  let fixture: ComponentFixture<ProjectBuildIssueLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBuildIssueLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBuildIssueLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
