import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRequirementListComponent } from './project-requirement-list.component';

describe('ProjectRequirementListComponent', () => {
  let component: ProjectRequirementListComponent;
  let fixture: ComponentFixture<ProjectRequirementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRequirementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRequirementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
