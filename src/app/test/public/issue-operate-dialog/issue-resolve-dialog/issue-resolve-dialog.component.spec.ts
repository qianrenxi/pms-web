import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueResolveDialogComponent } from './issue-resolve-dialog.component';

describe('IssueResolveDialogComponent', () => {
  let component: IssueResolveDialogComponent;
  let fixture: ComponentFixture<IssueResolveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueResolveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueResolveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
