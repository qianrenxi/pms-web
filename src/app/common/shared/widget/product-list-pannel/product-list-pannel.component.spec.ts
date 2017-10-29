import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListPannelComponent } from './product-list-pannel.component';

describe('ProductListPannelComponent', () => {
  let component: ProductListPannelComponent;
  let fixture: ComponentFixture<ProductListPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
