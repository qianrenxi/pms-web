import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDocLibComponent } from './product-doc-lib.component';

describe('ProductDocLibComponent', () => {
  let component: ProductDocLibComponent;
  let fixture: ComponentFixture<ProductDocLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDocLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDocLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
