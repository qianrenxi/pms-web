import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementListPannelComponent } from './requirement-list-pannel.component';

describe('RequirementListPannelComponent', () => {
  let component: RequirementListPannelComponent;
  let fixture: ComponentFixture<RequirementListPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementListPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementListPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
