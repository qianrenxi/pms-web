import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSuiteCaseLinkComponent } from './test-suite-case-link.component';

describe('TestSuiteCaseLinkComponent', () => {
  let component: TestSuiteCaseLinkComponent;
  let fixture: ComponentFixture<TestSuiteCaseLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSuiteCaseLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSuiteCaseLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
