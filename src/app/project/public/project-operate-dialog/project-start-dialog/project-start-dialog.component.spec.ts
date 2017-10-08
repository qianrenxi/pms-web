import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStartDialogComponent } from './project-start-dialog.component';

describe('ProjectStartDialogComponent', () => {
  let component: ProjectStartDialogComponent;
  let fixture: ComponentFixture<ProjectStartDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStartDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
