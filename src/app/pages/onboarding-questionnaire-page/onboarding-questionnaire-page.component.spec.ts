import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OnboardingQuestionnairePageComponent} from './onboarding-questionnaire-page.component';
import {configureTestHelper} from '../../app.module.test-helper';

describe('OnboardingQuestionnairePageComponent', () => {
  let component: OnboardingQuestionnairePageComponent;
  let fixture: ComponentFixture<OnboardingQuestionnairePageComponent>;

  beforeEach(() => configureTestHelper());

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingQuestionnairePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
