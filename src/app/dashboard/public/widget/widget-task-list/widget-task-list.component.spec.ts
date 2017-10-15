import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTaskListComponent } from './widget-task-list.component';

describe('WidgetTaskListComponent', () => {
  let component: WidgetTaskListComponent;
  let fixture: ComponentFixture<WidgetTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
