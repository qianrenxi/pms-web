import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildSelectComponent } from './build-select.component';

describe('BuildSelectComponent', () => {
  let component: BuildSelectComponent;
  let fixture: ComponentFixture<BuildSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
