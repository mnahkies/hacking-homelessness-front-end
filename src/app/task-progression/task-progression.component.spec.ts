import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskProgressionComponent } from './task-progression.component';

describe('TaskProgressionComponent', () => {
  let component: TaskProgressionComponent;
  let fixture: ComponentFixture<TaskProgressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskProgressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
