import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskActiveDialogComponent } from './task-active-dialog.component';

describe('TaskActiveDialogComponent', () => {
  let component: TaskActiveDialogComponent;
  let fixture: ComponentFixture<TaskActiveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskActiveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskActiveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
