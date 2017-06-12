import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanViewReportComponent } from './plan-view-report.component';

describe('PlanViewReportComponent', () => {
  let component: PlanViewReportComponent;
  let fixture: ComponentFixture<PlanViewReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanViewReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanViewReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
