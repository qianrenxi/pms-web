import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanViewInfoComponent } from './plan-view-info.component';

describe('PlanViewInfoComponent', () => {
  let component: PlanViewInfoComponent;
  let fixture: ComponentFixture<PlanViewInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanViewInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanViewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
