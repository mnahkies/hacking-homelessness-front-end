import {Action, Selector, State, StateContext} from '@ngxs/store';
import {IncreaseScore, SetFinanceLesson, SetOnboardingQuestions} from './core.actions';
import {ConversationScript} from '../interfaces';

export class CoreStateModel {
  score: number = 0;
  onboardingConversationScript?: ConversationScript;
  financelessonConversationScript?: ConversationScript;
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

  @Selector()
  static getScore(state: CoreStateModel) {
    return state.score;
  }

  @Selector()
  static getFinanceLessonConversationScript(state: CoreStateModel) {
    return state.financelessonConversationScript;
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

  @Action(SetFinanceLesson)
  setFinanceLessonQuestions({patchState}: StateContext<CoreStateModel>, {questions, firstQuestionId}: SetFinanceLesson) {
    patchState({
      financelessonConversationScript: {
        firstQuestionId,
        questions,
      },
    });
  }

  @Action(IncreaseScore)
  increaseScore({patchState, getState}: StateContext<CoreStateModel>, {score}: IncreaseScore) {
    patchState({
      score: getState().score + score,
    });
  }
}
