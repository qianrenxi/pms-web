import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseViewComponent } from './test-case-view.component';

describe('TestCaseViewComponent', () => {
  let component: TestCaseViewComponent;
  let fixture: ComponentFixture<TestCaseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCaseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
