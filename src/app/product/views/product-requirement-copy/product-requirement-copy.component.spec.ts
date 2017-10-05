import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRequirementCopyComponent } from './product-requirement-copy.component';

describe('ProductRequirementCopyComponent', () => {
  let component: ProductRequirementCopyComponent;
  let fixture: ComponentFixture<ProductRequirementCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRequirementCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequirementCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
