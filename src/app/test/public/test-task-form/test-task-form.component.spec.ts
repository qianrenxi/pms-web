import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTaskFormComponent } from './test-task-form.component';

describe('TestTaskFormComponent', () => {
  let component: TestTaskFormComponent;
  let fixture: ComponentFixture<TestTaskFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTaskFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
