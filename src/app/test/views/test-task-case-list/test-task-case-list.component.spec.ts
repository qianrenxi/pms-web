import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTaskCaseListComponent } from './test-task-case-list.component';

describe('TestTaskCaseListComponent', () => {
  let component: TestTaskCaseListComponent;
  let fixture: ComponentFixture<TestTaskCaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTaskCaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTaskCaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
