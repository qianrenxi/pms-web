import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementBatchFormComponent } from './requirement-batch-form.component';

describe('RequirementBatchFormComponent', () => {
  let component: RequirementBatchFormComponent;
  let fixture: ComponentFixture<RequirementBatchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementBatchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementBatchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
