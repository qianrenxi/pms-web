import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListPannelComponent } from './task-list-pannel.component';

describe('TaskListPannelComponent', () => {
  let component: TaskListPannelComponent;
  let fixture: ComponentFixture<TaskListPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
