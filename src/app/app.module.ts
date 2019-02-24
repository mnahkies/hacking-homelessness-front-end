import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxsModule, Store} from '@ngxs/store';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {SetFinanceLesson, SetOnboardingQuestions} from './state/core.actions';
import {CoreState} from './state/core.state';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NavHeaderComponent} from './components/nav-header/nav-header.component';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {ConversationComponent} from './components/conversation/conversation.component';
import {MaterialModule} from './shared/material.module';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {TaskProgressionComponent} from './components/task-progression/task-progression.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {LessonsComponent} from './components/lessons/lessons.component';
import {LessonComponent} from './components/lesson/lesson.component';
import {OnboardingQuestionnairePageComponent} from './pages/onboarding-questionnaire-page/onboarding-questionnaire-page.component';
import {environment} from '../environments/environment';
import {AchievementsPageComponent} from './pages/achievements-page/achievements-page.component';
import {LessonPageComponent} from './pages/lesson-page/lesson-page.component';
import {QuestionType} from './interfaces';

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
    AchievementsPageComponent,
    LessonPageComponent,
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
        'id': '1',
        'nextQuestionId': '2',
        'text': 'Hey,',
        'type': 'statement',
      },
      '10': {
        'id': '10',
        'nextQuestionId': '11',
        'text': 'Understanding money is a great stepping stone to independence.',
        'type': 'statement',
      },
      '11': {
        'answers': [{
          'id': '1',
          'nextQuestionId': '12',
          'text': 'Opening a Bank Account',
        }, {
          'id': '2',
          'nextQuestionId': '',
          'text': 'Reducing Debt',
        }, {
          'id': '3',
          'nextQuestionId': '',
          'text': 'Managing Money',
        }, {
          'id': '4',
          'nextQuestionId': '',
          'text': 'Increasing Income',
        }],
        'id': '11',
        'text': 'Where you\'d like to start:',
        'type': 'multi-choice',
      },
      '12': {
        'id': '12',
        'nextQuestionId': '13',
        'text': 'Nice, you\'re on a roll already.',
        'type': 'statement',
      },
      '13': {
        'id': '13',
        'nextQuestionId': '14',
        'text': 'First achievements!',
        'type': 'statement',
      },
      '14': {
        'id': '14',
        'nextQuestionId': '15',
        'text': '- Setting up my account',
        'type': 'statement',
      },
      '15': {
        'id': '15',
        'text': '- Having a new focus',
        'type': 'statement',
        nextQuestionId: '16',
      },
      '16': {
        id: '16',
        text: 'Let\'s go to your dashboard to take your next step.',
        type: 'statement',
      },
      '2': {
        'answers': [{
          'id': 'en',
          'nextQuestionId': '3',
          'text': 'English',
        }, {
          'id': 'ro',
          'nextQuestionId': '3',
          'text': 'Română',
        }, {
          'id': 'ar',
          'nextQuestionId': '3',
          'text': 'العربية',
        }, {
          'id': 'ku',
          'nextQuestionId': '3',
          'text': 'کوردی',
        }, {
          'id': 'pl',
          'nextQuestionId': '3',
          'text': 'Polski',
        }],
        'id': '2',
        'text': 'please choose your language',
        'type': 'multi-choice',
      },
      '3': {
        'id': '3',
        'nextQuestionId': '4',
        'text': 'Welcome to piece of pie, my name\'s PieBot,',
        'type': 'statement',
      },
      '4': {
        'id': '4',
        'nextQuestionId': '5',
        'text': 'What\'s your name?',
        'type': QuestionType.FreeForm,
      },
      '5': {
        'id': '5',
        'nextQuestionId': '6',
        'text': 'Hey Sarah, nice to meet you.',
        'type': 'statement',
      },
      '6': {
        'id': '6',
        'nextQuestionId': '7',
        'text': 'I\'m here to share what I know about leading an independent life.',
        'type': 'statement',
      },
      '7': {
        'id': '7',
        'nextQuestionId': '8',
        'text': 'There are a few topics to this.',
        'type': 'statement',
      },
      '8': {
        'answers': [{
          'id': 'housing',
          'nextQuestionId': '',
          'text': 'Housing',
        }, {
          'id': 'money',
          'nextQuestionId': '9',
          'text': 'Money',
        }, {
          'id': 'work',
          'nextQuestionId': '',
          'text': 'Work and Education',
        }, {
          'id': 'life',
          'nextQuestionId': '',
          'text': 'Life Skills',
        }],
        'id': '8',
        'text': 'Where would you first like to focus first?',
        'type': 'multi-choice',
      },
      '9': {
        'id': '9',
        'nextQuestionId': '10',
        'text': 'Good choice!',
        'type': 'statement',
      },
    }, '1'));

    store.dispatch(new SetFinanceLesson({
      '1': {'id': '1', 'nextQuestionId': '2', 'text': 'Hey Sarah,', 'type': 'statement'},
      '2': {
        'answers': [
          {'id': 'y', 'nextQuestionId': '3', 'text': 'Yeah, please'},
          {'id': 'n', 'nextQuestionId': '18', 'text': 'No, I know what it’s for'}
        ], 'id': '2', 'text': 'Would you like to know about what a bank account is for?', 'type': 'multi-choice'
      },
      '3': {'id': '3', 'nextQuestionId': '4', 'text': 'Sure!', 'type': 'statement'},
      '4': {'id': '4', 'nextQuestionId': '5', 'text': 'A bank account is place to store your money.', 'type': 'statement'},
      '5': {
        'id': '5',
        'nextQuestionId': '6',
        'text': 'When you open a bank account, you enter into an agreement with the bank meaning they will look after your money and let you gain access when you need it.',
        'type': 'statement'
      },
      '6': {
        'id': '6',
        'nextQuestionId': '7',
        'text': 'When your money is in the bank, it is protected as only you can access it.',
        'type': 'statement'
      },
      '7': {
        'id': '7',
        'nextQuestionId': '8',
        'text': 'You can access your money from the bank via a cash machine or online banking.',
        'type': 'statement'
      },
      '8': {
        'answers': [
          {'id': 'yes', 'nextQuestionId': '17', 'text': 'Good.'},
          {'id': 'next', 'nextQuestionId': '9', 'text': 'What’s online banking?'}
        ],
        'id': '8',
        'text': 'How’s that all so far?',
        'type': 'multi-choice'
      },
      '9': {
        'id': '9',
        'nextQuestionId': '10',
        'text': 'Online banking, is an easy way to keep up to date on what your spending your money on.',
        'type': 'statement'
      },
      '10': {'id': '10', 'nextQuestionId': '11', 'text': 'And, you can also use it to stay up to date with payments.', 'type': 'statement'},
      '11': {
        'id': '11',
        'nextQuestionId': '12',
        'text': 'It will also save you time from going to visit a bank branch!',
        'type': 'statement'
      },
      '12': {
        'id': '12',
        'type': 'link',
        'url': 'do_not_render',
        'text': 'See what Alfonso uses online banking for',
        'previewImage': '../assets/images/Video.png',
        'nextQuestionId': '14'
      },
      '14': {
        'answers': [{'id': 'no', 'nextQuestionId': '20', 'text': 'Move on'}, {
          'id': 'yes',
          'nextQuestionId': '15',
          'text': 'Learn more.'
        }], 'id': '14', 'text': 'Would you like to learn more or move on?', 'type': 'multi-choice'
      },
      '15': {'id': '15', 'nextQuestionId': '16', 'text': 'If you want to learn more, I recommend reading', 'type': 'statement'},
      '16': {
        'id': '16',
        'type': 'link',
        url: 'https://www.moneyadviceservice.org.uk/en/articles/beginners-guide-to-online-banking',
        previewImage: 'https://mascdn.azureedge.net/frontend/a/MAS-logo_social-sharing-81e81c01d7ff9665b49321164faf4fb9.png',
        text: 'Online banking, or internet banking, has become increasingly popular but how does it work and is it safe?',
        'nextQuestionId': '17'
      },
      '17': {'id': '17', 'nextQuestionId': '18', 'text': 'Next, I’m going to tell you about, types of bank account.', 'type': 'statement'},
      '18': {
        'answers': [
          {'id': 'no', 'nextQuestionId': '', 'text': 'Sure, keep going'},
          {'id': 'yes', 'nextQuestionId': '19', 'text': 'No, I’m done for now'}
        ], 'id': '18', 'text': 'Shall we carry on?', 'type': 'multi-choice'
      },
      '19': {'id': '19', 'nextQuestionId': '20', 'text': 'All right.', 'type': 'statement'},
      '20': {'id': '20', 'nextQuestionId': '21', 'text': 'Good start today.', 'type': 'statement'},
      '21': {'id': '21', 'nextQuestionId': '', 'text': 'Come back and chat when you want to learn more.', 'type': 'statement'}
    }, '1'));
  }
}
