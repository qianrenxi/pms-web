import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIssueListComponent } from './my-issue-list.component';

describe('MyIssueListComponent', () => {
  let component: MyIssueListComponent;
  let fixture: ComponentFixture<MyIssueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIssueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIssueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
