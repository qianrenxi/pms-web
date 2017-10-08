import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTimeEntriesDialogComponent } from './task-time-entries-dialog.component';

describe('TaskTimeEntriesDialogComponent', () => {
  let component: TaskTimeEntriesDialogComponent;
  let fixture: ComponentFixture<TaskTimeEntriesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskTimeEntriesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTimeEntriesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
