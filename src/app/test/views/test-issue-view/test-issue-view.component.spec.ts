import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIssueViewComponent } from './test-issue-view.component';

describe('TestIssueViewComponent', () => {
  let component: TestIssueViewComponent;
  let fixture: ComponentFixture<TestIssueViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIssueViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIssueViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
