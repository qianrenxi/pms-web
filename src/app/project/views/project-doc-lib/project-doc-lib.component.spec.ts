import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDocLibComponent } from './project-doc-lib.component';

describe('ProjectDocLibComponent', () => {
  let component: ProjectDocLibComponent;
  let fixture: ComponentFixture<ProjectDocLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDocLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDocLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
