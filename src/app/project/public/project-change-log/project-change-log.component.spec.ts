import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectChangeLogComponent } from './project-change-log.component';

describe('ProjectChangeLogComponent', () => {
  let component: ProjectChangeLogComponent;
  let fixture: ComponentFixture<ProjectChangeLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectChangeLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectChangeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
