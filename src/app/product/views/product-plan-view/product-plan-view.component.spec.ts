import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPlanViewComponent } from './product-plan-view.component';

describe('ProductPlanViewComponent', () => {
  let component: ProductPlanViewComponent;
  let fixture: ComponentFixture<ProductPlanViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPlanViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPlanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
