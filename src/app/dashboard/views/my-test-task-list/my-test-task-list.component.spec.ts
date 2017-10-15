import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestTaskListComponent } from './my-test-task-list.component';

describe('MyTestTaskListComponent', () => {
  let component: MyTestTaskListComponent;
  let fixture: ComponentFixture<MyTestTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTestTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTestTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
