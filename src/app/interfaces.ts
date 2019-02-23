export enum QuestionType {
  FreeForm = 'free-form',
  MultiChoice = 'multi-choice'
}

export interface MultiChoiceQuestion {
  id: string;
  type: 'multi-choice';
  text: string;
  answers: Answer[];
}

export interface Answer {
  id: string;
  text: string;
  nextQuestionId?: string;
}

export interface FreeFormQuestion {
  id: string;
  type: 'free-form';
  text: string;
  nextQuestionId?: string;
}

export type Question = FreeFormQuestion | MultiChoiceQuestion;

// eg: GET /api/onboarding/questions
export interface GetQuestionsResponse {
  firstQuestionId: string;
  questions: { [questionId: string]: Question };
}

// eg: POST /api/onboarding/answers
export interface PostAnswersResponse {
  [questionId: string]: string;
}
