export enum QuestionType {
  FreeForm = 'free-form',
  MultiChoice = 'multi-choice',
  Statement = 'statement',
  Link = 'link'
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
  type: 'free-form' | 'statement';
  text: string;
  nextQuestionId?: string;
}

export interface Link {
  id: string
  type: "link"
  text: string
  previewImage: string
  url: string
  nextQuestionId?: string
}

export type Question = FreeFormQuestion | MultiChoiceQuestion | Link;

export type ConversationScript = {
  firstQuestionId: string;
  questions: Dictionary<Question>;
};

export type ConversationScriptResult = {
  history: any[];
  answers: Dictionary<string>;
};

// eg: GET /api/onboarding/questions
export interface GetQuestionsResponse {
  firstQuestionId: string;
  questions: { [questionId: string]: Question };
}

// eg: POST /api/onboarding/answers
export interface PostAnswersResponse {
  [questionId: string]: string;
}

export interface Lesson {
  name: string;
  header: string;
  details: string;
  icon: string;
  id: string;
  done: boolean;
  locked: boolean;
  className: string;
}
