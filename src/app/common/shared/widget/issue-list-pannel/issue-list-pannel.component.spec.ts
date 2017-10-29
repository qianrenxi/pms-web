import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueListPannelComponent } from './issue-list-pannel.component';

describe('IssueListPannelComponent', () => {
  let component: IssueListPannelComponent;
  let fixture: ComponentFixture<IssueListPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueListPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
