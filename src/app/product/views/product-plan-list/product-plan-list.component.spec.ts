import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPlanListComponent } from './product-plan-list.component';

describe('ProductPlanListComponent', () => {
  let component: ProductPlanListComponent;
  let fixture: ComponentFixture<ProductPlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPlanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
