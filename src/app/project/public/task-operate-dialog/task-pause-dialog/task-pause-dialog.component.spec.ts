import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPauseDialogComponent } from './task-pause-dialog.component';

describe('TaskPauseDialogComponent', () => {
  let component: TaskPauseDialogComponent;
  let fixture: ComponentFixture<TaskPauseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPauseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPauseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
