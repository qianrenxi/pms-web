import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSuiteCaseListComponent } from './test-suite-case-list.component';

describe('TestSuiteCaseListComponent', () => {
  let component: TestSuiteCaseListComponent;
  let fixture: ComponentFixture<TestSuiteCaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSuiteCaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSuiteCaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
