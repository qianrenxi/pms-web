import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRequirementViewComponent } from './product-requirement-view.component';

describe('ProductRequirementViewComponent', () => {
  let component: ProductRequirementViewComponent;
  let fixture: ComponentFixture<ProductRequirementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRequirementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequirementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
