import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointedGainedComponent } from './pointed-gained.component';

describe('PointedGainedComponent', () => {
  let component: PointedGainedComponent;
  let fixture: ComponentFixture<PointedGainedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointedGainedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointedGainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
