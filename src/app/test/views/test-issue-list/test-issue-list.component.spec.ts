import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIssueListComponent } from './test-issue-list.component';

describe('TestIssueListComponent', () => {
  let component: TestIssueListComponent;
  let fixture: ComponentFixture<TestIssueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIssueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIssueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
