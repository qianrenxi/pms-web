import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTaskCopyComponent } from './project-task-copy.component';

describe('ProjectTaskCopyComponent', () => {
  let component: ProjectTaskCopyComponent;
  let fixture: ComponentFixture<ProjectTaskCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTaskCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTaskCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
