import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPauseDialogComponent } from './project-pause-dialog.component';

describe('ProjectPauseDialogComponent', () => {
  let component: ProjectPauseDialogComponent;
  let fixture: ComponentFixture<ProjectPauseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPauseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPauseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
