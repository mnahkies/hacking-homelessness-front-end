import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionairePageComponent} from './onboarding/pages/questionaire-page/questionaire-page.component';

const routes: Routes = [
  {
    path: 'onboarding/questionaire',
    component: QuestionairePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
