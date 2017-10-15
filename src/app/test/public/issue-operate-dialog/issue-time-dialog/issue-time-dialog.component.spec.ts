import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTimeDialogComponent } from './issue-time-dialog.component';

describe('IssueTimeDialogComponent', () => {
  let component: IssueTimeDialogComponent;
  let fixture: ComponentFixture<IssueTimeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueTimeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTimeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
