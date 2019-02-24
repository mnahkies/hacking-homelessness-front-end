import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { OnboardingQuestionnairePageComponent } from "./pages/onboarding-questionnaire-page/onboarding-questionnaire-page.component";
import { AchievementsPageComponent } from "./pages/achievements-page/achievements-page.component";
import { LessonPageComponent } from "./pages/lesson-page/lesson-page.component";
import { PointedGainedComponent } from "./components/pointed-gained/pointed-gained.component";

const routes: Routes = [
  {
    path: "",
    component: OnboardingQuestionnairePageComponent
  },
  {
    path: "lessons/:lessonId",
    component: LessonPageComponent
  },
  {
    path: "achievements",
    component: AchievementsPageComponent
  },
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "pointsgained",
    component: PointedGainedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
