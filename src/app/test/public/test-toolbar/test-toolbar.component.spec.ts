import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestToolbarComponent } from './test-toolbar.component';

describe('TestToolbarComponent', () => {
  let component: TestToolbarComponent;
  let fixture: ComponentFixture<TestToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
