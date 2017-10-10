import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIssueEditComponent } from './test-issue-edit.component';

describe('TestIssueEditComponent', () => {
  let component: TestIssueEditComponent;
  let fixture: ComponentFixture<TestIssueEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIssueEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIssueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
