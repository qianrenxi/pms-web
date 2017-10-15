import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetProductListComponent } from './widget-product-list.component';

describe('WidgetProductListComponent', () => {
  let component: WidgetProductListComponent;
  let fixture: ComponentFixture<WidgetProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
