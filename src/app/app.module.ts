import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxsModule, Store} from '@ngxs/store';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OnboardingModule} from './onboarding/onboarding.module';
import {FormsModule} from '@angular/forms';
import {SetOnboardingQuestions} from './state/core.actions';
import {CoreState} from './state/core.state';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([CoreState]),
    NgxsLoggerPluginModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    OnboardingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(store: Store) {

    store.dispatch(new SetOnboardingQuestions({
      '1': {
        id: '1',
        text: 'How old are you?',
        type: 'multi-choice',
        answers: [
          {
            id: 'a',
            text: '<18',
            nextQuestionId: '2',
          },
          {
            id: 'b',
            text: '18-22',
            nextQuestionId: '3',
          },
          {
            id: 'c',
            text: '22-25',
            nextQuestionId: '4',
          },
        ],
      },
      '2': {
        id: '2',
        text: 'What is your name?',
        type: 'free-form',
      },
    }, '1'));

  }

}
