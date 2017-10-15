import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequirementListComponent } from './my-requirement-list.component';

describe('MyRequirementListComponent', () => {
  let component: MyRequirementListComponent;
  let fixture: ComponentFixture<MyRequirementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRequirementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRequirementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
