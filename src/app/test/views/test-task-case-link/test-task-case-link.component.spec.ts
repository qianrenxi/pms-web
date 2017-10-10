import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTaskCaseLinkComponent } from './test-task-case-link.component';

describe('TestTaskCaseLinkComponent', () => {
  let component: TestTaskCaseLinkComponent;
  let fixture: ComponentFixture<TestTaskCaseLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTaskCaseLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTaskCaseLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
