import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueVerifyDialogComponent } from './issue-verify-dialog.component';

describe('IssueVerifyDialogComponent', () => {
  let component: IssueVerifyDialogComponent;
  let fixture: ComponentFixture<IssueVerifyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueVerifyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueVerifyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
