import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {OnboardingQuestionnairePageComponent} from './pages/onboarding-questionnaire-page/onboarding-questionnaire-page.component';
import {AchievementsPageComponent} from './pages/achievements-page/achievements-page.component';

const routes: Routes = [
  {
    path: 'onboarding/questionnaire',
    component: OnboardingQuestionnairePageComponent,
  },
  {
    path: 'achievements',
    component: AchievementsPageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
