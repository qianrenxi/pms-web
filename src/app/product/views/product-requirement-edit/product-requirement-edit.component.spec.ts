import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRequirementEditComponent } from './product-requirement-edit.component';

describe('ProductRequirementEditComponent', () => {
  let component: ProductRequirementEditComponent;
  let fixture: ComponentFixture<ProductRequirementEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRequirementEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequirementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
