import {TestBed} from '@angular/core/testing';
import {AppModule} from './app.module';
import {RouterTestingModule} from '@angular/router/testing';

export async function configureTestHelper() {
  await TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      AppModule,
    ],
  })
    .compileComponents();
}
