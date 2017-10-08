import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBuildAddComponent } from './project-build-add.component';

describe('ProjectBuildAddComponent', () => {
  let component: ProjectBuildAddComponent;
  let fixture: ComponentFixture<ProjectBuildAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBuildAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBuildAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
