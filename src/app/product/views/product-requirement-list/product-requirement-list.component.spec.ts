import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRequirementListComponent } from './product-requirement-list.component';

describe('ProductRequirementListComponent', () => {
  let component: ProductRequirementListComponent;
  let fixture: ComponentFixture<ProductRequirementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRequirementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequirementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
