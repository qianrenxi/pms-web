import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementCloseDialogComponent } from './requirement-close-dialog.component';

describe('RequirementCloseDialogComponent', () => {
  let component: RequirementCloseDialogComponent;
  let fixture: ComponentFixture<RequirementCloseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementCloseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementCloseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
