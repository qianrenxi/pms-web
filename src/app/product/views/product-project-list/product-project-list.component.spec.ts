import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductProjectListComponent } from './product-project-list.component';

describe('ProductProjectListComponent', () => {
  let component: ProductProjectListComponent;
  let fixture: ComponentFixture<ProductProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductProjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
