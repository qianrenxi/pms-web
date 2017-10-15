import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetActivityListComponent } from './widget-activity-list.component';

describe('WidgetActivityListComponent', () => {
  let component: WidgetActivityListComponent;
  let fixture: ComponentFixture<WidgetActivityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetActivityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
