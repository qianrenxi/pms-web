import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCloseDialogComponent } from './project-close-dialog.component';

describe('ProjectCloseDialogComponent', () => {
  let component: ProjectCloseDialogComponent;
  let fixture: ComponentFixture<ProjectCloseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCloseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCloseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
