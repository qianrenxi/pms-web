import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductJumpBoxComponent } from './product-jump-box.component';

describe('ProductJumpBoxComponent', () => {
  let component: ProductJumpBoxComponent;
  let fixture: ComponentFixture<ProductJumpBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductJumpBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductJumpBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
