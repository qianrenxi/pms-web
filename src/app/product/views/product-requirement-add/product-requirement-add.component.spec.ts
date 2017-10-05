import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRequirementAddComponent } from './product-requirement-add.component';

describe('ProductRequirementAddComponent', () => {
  let component: ProductRequirementAddComponent;
  let fixture: ComponentFixture<ProductRequirementAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRequirementAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequirementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
