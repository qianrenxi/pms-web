import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCancelDialogComponent } from './task-cancel-dialog.component';

describe('TaskCancelDialogComponent', () => {
  let component: TaskCancelDialogComponent;
  let fixture: ComponentFixture<TaskCancelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCancelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCancelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
