import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxsModule, Store} from '@ngxs/store';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {SetOnboardingQuestions} from './state/core.actions';
import {CoreState} from './state/core.state';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NavHeaderComponent} from './components/nav-header/nav-header.component';
import {MaterialModule} from './shared/material.module';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {TaskProgressionComponent} from './components/task-progression/task-progression.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {LessonsComponent} from './components/lessons/lessons.component';
import {LessonComponent} from './components/lesson/lesson.component';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {ConversationComponent} from './components/conversation/conversation.component';
import {QuestionType} from './interfaces';
import {OnboardingQuestionnairePageComponent} from './pages/onboarding-questionnaire-page/onboarding-questionnaire-page.component';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ConversationComponent,
    HomePageComponent,
    LessonComponent,
    LessonsComponent,
    NavHeaderComponent,
    OnboardingQuestionnairePageComponent,
    TaskProgressionComponent,
    TasksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([CoreState], {developmentMode: !environment.production}),
    NgxsLoggerPluginModule.forRoot({disabled: environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot({disabled: environment.production}),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    OnboardingQuestionnairePageComponent,
    HomePageComponent,
  ],
})
export class AppModule {
  constructor(store: Store) {
    store.dispatch(new SetOnboardingQuestions({
      '1': {
        id: '1',
        text: 'How old are you?',
        type: QuestionType.MultiChoice,
        answers: [
          {
            id: 'a',
            text: '<18',
            nextQuestionId: '2',
          },
          {
            id: 'b',
            text: '18-22',
            nextQuestionId: '2',
          },
          {
            id: 'c',
            text: '22-25',
            nextQuestionId: '2',
          },
        ],
      },
      '2': {
        id: '2',
        text: 'What is your name?',
        type: QuestionType.FreeForm,
      },
      '3': {
        id: '3',
        text: 'What is your favourite color?',
        type: QuestionType.MultiChoice,
        answers: [
          {
            id: 'a',
            text: 'Blue',
            nextQuestionId: '4',
          },
          {
            id: 'b',
            text: 'Red',
            nextQuestionId: '5',
          },
        ],
      },
      '4': {
        id: '4',
        text: 'Blue is my favourite color too! Finally, what is your email address?',
        type: QuestionType.FreeForm,
      },
      '5': {
        id: '5',
        text: 'That\'s cool! Mine is blue. Finally, what is your email address?',
        type: QuestionType.FreeForm,
      },
    }, '1'));
  }
}
