import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestCaseListComponent } from './my-test-case-list.component';

describe('MyTestCaseListComponent', () => {
  let component: MyTestCaseListComponent;
  let fixture: ComponentFixture<MyTestCaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTestCaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTestCaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
