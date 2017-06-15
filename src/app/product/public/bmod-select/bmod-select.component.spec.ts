import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmodSelectComponent } from './bmod-select.component';

describe('BmodSelectComponent', () => {
  let component: BmodSelectComponent;
  let fixture: ComponentFixture<BmodSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmodSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmodSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
