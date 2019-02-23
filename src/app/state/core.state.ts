import {Action, Selector, State, StateContext} from '@ngxs/store';
import {SetOnboardingQuestions} from './core.actions';
import {ConversationScript} from '../interfaces';

export class CoreStateModel {
  onboardingConversationScript?: ConversationScript;
}

@State<CoreStateModel>({
  name: 'core',
  defaults: new CoreStateModel(),
})
export class CoreState {

  @Selector()
  static getOnboardingConversationScript(state: CoreStateModel) {
    return state.onboardingConversationScript;
  }

  @Action(SetOnboardingQuestions)
  setOnboardingQuestions({patchState}: StateContext<CoreStateModel>, {questions, firstQuestionId}: SetOnboardingQuestions) {
    patchState({
      onboardingConversationScript: {
        firstQuestionId,
        questions,
      },
    });
  }
}
