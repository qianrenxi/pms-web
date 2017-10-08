import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBuildRequiementListComponent } from './project-build-requiement-list.component';

describe('ProjectBuildRequiementListComponent', () => {
  let component: ProjectBuildRequiementListComponent;
  let fixture: ComponentFixture<ProjectBuildRequiementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBuildRequiementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBuildRequiementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
