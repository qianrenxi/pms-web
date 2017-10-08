import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDelayDialogComponent } from './project-delay-dialog.component';

describe('ProjectDelayDialogComponent', () => {
  let component: ProjectDelayDialogComponent;
  let fixture: ComponentFixture<ProjectDelayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDelayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDelayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
