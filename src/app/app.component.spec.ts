import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {configureTestHelper} from './app.module.test-helper';

describe('AppComponent', () => {

  beforeEach(() => configureTestHelper());

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
