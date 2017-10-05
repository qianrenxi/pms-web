import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementSubdivideDialogComponent } from './requirement-subdivide-dialog.component';

describe('RequirementSubdivideDialogComponent', () => {
  let component: RequirementSubdivideDialogComponent;
  let fixture: ComponentFixture<RequirementSubdivideDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementSubdivideDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementSubdivideDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
