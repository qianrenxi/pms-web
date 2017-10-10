import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSuiteViewComponent } from './test-suite-view.component';

describe('TestSuiteViewComponent', () => {
  let component: TestSuiteViewComponent;
  let fixture: ComponentFixture<TestSuiteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSuiteViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSuiteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
