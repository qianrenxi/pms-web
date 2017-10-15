import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetProjectListComponent } from './widget-project-list.component';

describe('WidgetProjectListComponent', () => {
  let component: WidgetProjectListComponent;
  let fixture: ComponentFixture<WidgetProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetProjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
