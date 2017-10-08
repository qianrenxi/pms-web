import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBuildRequiementLinkComponent } from './project-build-requiement-link.component';

describe('ProjectBuildRequiementLinkComponent', () => {
  let component: ProjectBuildRequiementLinkComponent;
  let fixture: ComponentFixture<ProjectBuildRequiementLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBuildRequiementLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBuildRequiementLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
