import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBuildListComponent } from './project-build-list.component';

describe('ProjectBuildListComponent', () => {
  let component: ProjectBuildListComponent;
  let fixture: ComponentFixture<ProjectBuildListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBuildListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBuildListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
