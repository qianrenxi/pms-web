import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibListComponent } from './lib-list.component';

describe('LibListComponent', () => {
  let component: LibListComponent;
  let fixture: ComponentFixture<LibListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
