import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseAddComponent } from './test-case-add.component';

describe('TestCaseAddComponent', () => {
  let component: TestCaseAddComponent;
  let fixture: ComponentFixture<TestCaseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCaseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
