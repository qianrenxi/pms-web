import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementSelectComponent } from './requirement-select.component';

describe('RequirementSelectComponent', () => {
  let component: RequirementSelectComponent;
  let fixture: ComponentFixture<RequirementSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
