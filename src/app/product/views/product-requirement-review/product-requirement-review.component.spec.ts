import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRequirementReviewComponent } from './product-requirement-review.component';

describe('ProductRequirementReviewComponent', () => {
  let component: ProductRequirementReviewComponent;
  let fixture: ComponentFixture<ProductRequirementReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRequirementReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequirementReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
