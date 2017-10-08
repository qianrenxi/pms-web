import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCloseDialogComponent } from './task-close-dialog.component';

describe('TaskCloseDialogComponent', () => {
  let component: TaskCloseDialogComponent;
  let fixture: ComponentFixture<TaskCloseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCloseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCloseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
