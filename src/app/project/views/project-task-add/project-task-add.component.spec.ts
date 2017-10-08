import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTaskAddComponent } from './project-task-add.component';

describe('ProjectTaskAddComponent', () => {
  let component: ProjectTaskAddComponent;
  let fixture: ComponentFixture<ProjectTaskAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTaskAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTaskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
