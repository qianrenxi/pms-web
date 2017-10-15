import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoclibAddDialogComponent } from './doclib-add-dialog.component';

describe('DoclibAddDialogComponent', () => {
  let component: DoclibAddDialogComponent;
  let fixture: ComponentFixture<DoclibAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoclibAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoclibAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
