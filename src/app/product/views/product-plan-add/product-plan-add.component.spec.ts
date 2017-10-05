import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPlanAddComponent } from './product-plan-add.component';

describe('ProductPlanAddComponent', () => {
  let component: ProductPlanAddComponent;
  let fixture: ComponentFixture<ProductPlanAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPlanAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPlanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
