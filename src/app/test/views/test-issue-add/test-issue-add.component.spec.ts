import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIssueAddComponent } from './test-issue-add.component';

describe('TestIssueAddComponent', () => {
  let component: TestIssueAddComponent;
  let fixture: ComponentFixture<TestIssueAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIssueAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIssueAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
