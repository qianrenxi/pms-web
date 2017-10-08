import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRequirementLinkComponent } from './project-requirement-link.component';

describe('ProjectRequirementLinkComponent', () => {
  let component: ProjectRequirementLinkComponent;
  let fixture: ComponentFixture<ProjectRequirementLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRequirementLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRequirementLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
