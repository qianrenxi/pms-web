import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListPannelComponent } from './project-list-pannel.component';

describe('ProjectListPannelComponent', () => {
  let component: ProjectListPannelComponent;
  let fixture: ComponentFixture<ProjectListPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectListPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
