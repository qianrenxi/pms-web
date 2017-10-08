import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBuildEditComponent } from './project-build-edit.component';

describe('ProjectBuildEditComponent', () => {
  let component: ProjectBuildEditComponent;
  let fixture: ComponentFixture<ProjectBuildEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBuildEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBuildEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
