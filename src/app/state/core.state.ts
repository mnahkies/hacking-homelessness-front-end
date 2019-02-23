import {Action, Selector, State, StateContext} from '@ngxs/store';
import {SetOnboardingQuestions} from './core.actions';
import {Question} from '../interfaces';

export class CoreStateModel {
  firstOnboardingQuestionId = '';
  onboardingQuestions: Dictionary<Question> = {};
}

@State<CoreStateModel>({
  name: 'core',
  defaults: new CoreStateModel(),
})
export class CoreState {

  @Selector()
  static getOnboardingQuestions(state: CoreStateModel) {
    return state.onboardingQuestions;
  }

  @Selector()
  static getFirstOnboardingQuestionId(state: CoreStateModel) {
    return state.firstOnboardingQuestionId;
  }

  @Action(SetOnboardingQuestions)
  setOnboardingQuestions({patchState}: StateContext<CoreStateModel>, {questions, firstQuestionId}: SetOnboardingQuestions) {
    patchState({
      onboardingQuestions: questions,
      firstOnboardingQuestionId: firstQuestionId,
    });
  }
}
