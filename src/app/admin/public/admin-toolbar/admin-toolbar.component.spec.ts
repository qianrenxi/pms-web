import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToolbarComponent } from './admin-toolbar.component';

describe('AdminToolbarComponent', () => {
  let component: AdminToolbarComponent;
  let fixture: ComponentFixture<AdminToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
