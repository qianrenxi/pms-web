import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementChangeLogComponent } from './requirement-change-log.component';

describe('RequirementChangeLogComponent', () => {
  let component: RequirementChangeLogComponent;
  let fixture: ComponentFixture<RequirementChangeLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementChangeLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementChangeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
