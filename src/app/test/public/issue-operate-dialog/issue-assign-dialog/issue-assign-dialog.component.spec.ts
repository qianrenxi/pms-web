import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueAssignDialogComponent } from './issue-assign-dialog.component';

describe('IssueAssignDialogComponent', () => {
  let component: IssueAssignDialogComponent;
  let fixture: ComponentFixture<IssueAssignDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueAssignDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueAssignDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
