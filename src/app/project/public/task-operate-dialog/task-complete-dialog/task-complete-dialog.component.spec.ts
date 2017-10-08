import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCompleteDialogComponent } from './task-complete-dialog.component';

describe('TaskCompleteDialogComponent', () => {
  let component: TaskCompleteDialogComponent;
  let fixture: ComponentFixture<TaskCompleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCompleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCompleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
