import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEffortCalendarComponent } from './my-effort-calendar.component';

describe('MyEffortCalendarComponent', () => {
  let component: MyEffortCalendarComponent;
  let fixture: ComponentFixture<MyEffortCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEffortCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEffortCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
