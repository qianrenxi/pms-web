import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBuildViewComponent } from './project-build-view.component';

describe('ProjectBuildViewComponent', () => {
  let component: ProjectBuildViewComponent;
  let fixture: ComponentFixture<ProjectBuildViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBuildViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBuildViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
