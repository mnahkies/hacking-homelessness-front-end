import {Question} from '../interfaces';

export class SetOnboardingQuestions {
  static readonly type = '[Core] Set onboarding questions';

  constructor(readonly questions: Dictionary<Question>, readonly firstQuestionId: string) {
  }
}
