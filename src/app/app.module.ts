import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxsModule, Store } from "@ngxs/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { SetOnboardingQuestions } from "./state/core.actions";
import { CoreState } from "./state/core.state";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NavHeaderComponent } from "./components/nav-header/nav-header.component";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { ConversationComponent } from "./components/conversation/conversation.component";
import { MaterialModule } from "./shared/material.module";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { TaskProgressionComponent } from "./components/task-progression/task-progression.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { LessonsComponent } from "./components/lessons/lessons.component";
import { LessonComponent } from "./components/lesson/lesson.component";
import { OnboardingQuestionnairePageComponent } from "./pages/onboarding-questionnaire-page/onboarding-questionnaire-page.component";
import { environment } from "../environments/environment";
import { AchievementsPageComponent } from "./pages/achievements-page/achievements-page.component";
import { LessonPageComponent } from "./pages/lesson-page/lesson-page.component";
import { PointedGainedComponent } from "./components/pointed-gained/pointed-gained.component";

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
    PointedGainedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([CoreState], {
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OnboardingQuestionnairePageComponent, HomePageComponent]
})
export class AppModule {
  constructor(store: Store) {
    store.dispatch(
      new SetOnboardingQuestions(
        {
          "1": {
            id: "1",
            nextQuestionId: "2",
            text: "Hey,",
            type: "statement"
          },
          "10": {
            id: "10",
            nextQuestionId: "11",
            text:
              "Understanding money is a great stepping stone to independence.",
            type: "statement"
          },
          "11": {
            answers: [
              {
                id: "1",
                nextQuestionId: "12",
                text: "Opening a Bank Account"
              },
              {
                id: "2",
                nextQuestionId: "",
                text: "Reducing Debt"
              },
              {
                id: "3",
                nextQuestionId: "",
                text: "Managing Money"
              },
              {
                id: "4",
                nextQuestionId: "",
                text: "Increasing Income"
              }
            ],
            id: "11",
            text: "Where you'd like to start:",
            type: "multi-choice"
          },
          "12": {
            id: "12",
            nextQuestionId: "13",
            text: "Nice, you're on a roll already.",
            type: "statement"
          },
          "13": {
            id: "13",
            nextQuestionId: "14",
            text: "First achievements!",
            type: "statement"
          },
          "14": {
            id: "14",
            nextQuestionId: "15",
            text: "- Setting up my account",
            type: "statement"
          },
          "15": {
            id: "15",
            text: "- Having a new focus",
            type: "statement"
          },
          "2": {
            answers: [
              {
                id: "en",
                nextQuestionId: "3",
                text: "English"
              },
              {
                id: "ro",
                nextQuestionId: "3",
                text: "Română"
              },
              {
                id: "ar",
                nextQuestionId: "3",
                text: "العربية"
              },
              {
                id: "ku",
                nextQuestionId: "3",
                text: "کوردی"
              },
              {
                id: "pl",
                nextQuestionId: "3",
                text: "Polski"
              }
            ],
            id: "2",
            text: "please choose your language",
            type: "multi-choice"
          },
          "3": {
            id: "3",
            nextQuestionId: "4",
            text: "Welcome to piece of pie, my name's PieBot,",
            type: "statement"
          },
          "4": {
            id: "4",
            nextQuestionId: "5",
            text: "What's your name?",
            type: "free-form"
          },
          "5": {
            id: "5",
            nextQuestionId: "6",
            text: "Hey Sarah, nice to meet you.",
            type: "statement"
          },
          "6": {
            id: "6",
            nextQuestionId: "7",
            text:
              "I'm here to share what I know about leading an independent life.",
            type: "statement"
          },
          "7": {
            id: "7",
            nextQuestionId: "8",
            text: "There are a few topics to this.",
            type: "statement"
          },
          "8": {
            answers: [
              {
                id: "housing",
                nextQuestionId: "",
                text: "Housing"
              },
              {
                id: "money",
                nextQuestionId: "9",
                text: "Money"
              },
              {
                id: "work",
                nextQuestionId: "",
                text: "Work and Education"
              },
              {
                id: "life",
                nextQuestionId: "",
                text: "Life Skills"
              }
            ],
            id: "8",
            text: "Where would you first like to focus first?",
            type: "multi-choice"
          },
          "9": {
            id: "9",
            nextQuestionId: "10",
            text: "Good choice!",
            type: "statement"
          }
        },
        "1"
      )
    );
  }
}
