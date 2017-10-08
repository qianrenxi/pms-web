import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStartDialogComponent } from './task-start-dialog.component';

describe('TaskStartDialogComponent', () => {
  let component: TaskStartDialogComponent;
  let fixture: ComponentFixture<TaskStartDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStartDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
