import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSuiteAddComponent } from './test-suite-add.component';

describe('TestSuiteAddComponent', () => {
  let component: TestSuiteAddComponent;
  let fixture: ComponentFixture<TestSuiteAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSuiteAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSuiteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
