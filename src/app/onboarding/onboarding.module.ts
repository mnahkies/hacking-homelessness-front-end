import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionairePageComponent} from './pages/questionaire-page/questionaire-page.component';
import {MaterialModule} from '../shared/material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [QuestionairePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  entryComponents: [QuestionairePageComponent],
})
export class OnboardingModule {
}
