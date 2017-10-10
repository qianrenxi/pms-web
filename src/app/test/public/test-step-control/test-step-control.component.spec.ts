import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStepControlComponent } from './test-step-control.component';

describe('TestStepControlComponent', () => {
  let component: TestStepControlComponent;
  let fixture: ComponentFixture<TestStepControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestStepControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStepControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
