import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReleaseListComponent } from './product-release-list.component';

describe('ProductReleaseListComponent', () => {
  let component: ProductReleaseListComponent;
  let fixture: ComponentFixture<ProductReleaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductReleaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReleaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
