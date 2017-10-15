import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueCloseDialogComponent } from './issue-close-dialog.component';

describe('IssueCloseDialogComponent', () => {
  let component: IssueCloseDialogComponent;
  let fixture: ComponentFixture<IssueCloseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueCloseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueCloseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
