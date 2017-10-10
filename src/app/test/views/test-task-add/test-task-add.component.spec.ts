import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTaskAddComponent } from './test-task-add.component';

describe('TestTaskAddComponent', () => {
  let component: TestTaskAddComponent;
  let fixture: ComponentFixture<TestTaskAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTaskAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTaskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
