import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanViewRequirementComponent } from './plan-view-requirement.component';

describe('PlanViewRequirementComponent', () => {
  let component: PlanViewRequirementComponent;
  let fixture: ComponentFixture<PlanViewRequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanViewRequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanViewRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
