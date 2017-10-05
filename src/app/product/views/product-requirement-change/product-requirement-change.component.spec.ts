import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRequirementChangeComponent } from './product-requirement-change.component';

describe('ProductRequirementChangeComponent', () => {
  let component: ProductRequirementChangeComponent;
  let fixture: ComponentFixture<ProductRequirementChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRequirementChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequirementChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
