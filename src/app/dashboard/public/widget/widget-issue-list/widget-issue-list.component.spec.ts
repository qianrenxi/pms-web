import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetIssueListComponent } from './widget-issue-list.component';

describe('WidgetIssueListComponent', () => {
  let component: WidgetIssueListComponent;
  let fixture: ComponentFixture<WidgetIssueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetIssueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetIssueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
