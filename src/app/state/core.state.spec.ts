import {async, TestBed} from '@angular/core/testing';
import {NgxsModule, Store} from '@ngxs/store';
import {CoreState} from './core.state';

describe('Core actions', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([CoreState])],
    }).compileComponents();
    store = TestBed.get(Store);
  }));

});
