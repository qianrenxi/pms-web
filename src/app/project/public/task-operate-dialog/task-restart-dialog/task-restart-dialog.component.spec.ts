import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRestartDialogComponent } from './task-restart-dialog.component';

describe('TaskRestartDialogComponent', () => {
  let component: TaskRestartDialogComponent;
  let fixture: ComponentFixture<TaskRestartDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRestartDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRestartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
