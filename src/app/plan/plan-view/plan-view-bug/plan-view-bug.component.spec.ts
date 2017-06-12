import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanViewBugComponent } from './plan-view-bug.component';

describe('PlanViewBugComponent', () => {
  let component: PlanViewBugComponent;
  let fixture: ComponentFixture<PlanViewBugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanViewBugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanViewBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
