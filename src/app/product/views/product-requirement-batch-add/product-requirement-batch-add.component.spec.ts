import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRequirementBatchAddComponent } from './product-requirement-batch-add.component';

describe('ProductRequirementBatchAddComponent', () => {
  let component: ProductRequirementBatchAddComponent;
  let fixture: ComponentFixture<ProductRequirementBatchAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRequirementBatchAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequirementBatchAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
