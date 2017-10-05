import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPlanEditComponent } from './product-plan-edit.component';

describe('ProductPlanEditComponent', () => {
  let component: ProductPlanEditComponent;
  let fixture: ComponentFixture<ProductPlanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPlanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPlanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
