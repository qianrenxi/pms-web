import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTaskEditComponent } from './test-task-edit.component';

describe('TestTaskEditComponent', () => {
  let component: TestTaskEditComponent;
  let fixture: ComponentFixture<TestTaskEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTaskEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTaskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
