import {Question} from '../interfaces';

export class SetOnboardingQuestions {
  static readonly type = '[Core] Set onboarding questions';

  constructor(readonly questions: Dictionary<Question>, readonly firstQuestionId: string) {
  }
}

export class SetFinanceLesson {
  static readonly type = '[Core] Set finance questions';

  constructor(readonly questions: Dictionary<Question>, readonly firstQuestionId: string) {
  }
}

export class IncreaseScore {
  static readonly type = '[Core] Increase score';

  constructor(readonly score: number) {
  }
}
