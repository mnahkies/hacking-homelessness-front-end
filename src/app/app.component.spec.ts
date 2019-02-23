import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {configureTestHelper} from './app.module.test-helper';

describe('AppComponent', () => {

  beforeEach(() => configureTestHelper())

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
