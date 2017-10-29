import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTaskListPannelComponent } from './test-task-list-pannel.component';

describe('TestTaskListPannelComponent', () => {
  let component: TestTaskListPannelComponent;
  let fixture: ComponentFixture<TestTaskListPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTaskListPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTaskListPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
