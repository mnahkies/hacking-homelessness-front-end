import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionairePageComponent} from './onboarding/pages/questionaire-page/questionaire-page.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'onboarding/questionaire',
    component: QuestionairePageComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
