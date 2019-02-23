import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  Answer,
  ConversationScript,
  ConversationScriptResult,
  FreeFormQuestion,
  MultiChoiceQuestion,
  Question,
  QuestionType,
} from '../../interfaces';

interface Message {
  content: string
  position: 'left' | 'right'
}

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent implements OnInit {

  @Input() conversationScript!: ConversationScript;
  answers: { [questionId: string]: string } = {};

  @Output()
  result = new EventEmitter<ConversationScriptResult>();

  readonly history: Message[] = [];

  private currentQuestionId?: string;

  get currentQuestion() {
    let currentQuestionId = this.currentQuestionId;

    if (!currentQuestionId) {
      return;
    }

    return this.conversationScript.questions[currentQuestionId];
  }

  get currentAnswers() {
    let question = this.currentQuestion;

    if (!question) {
      return [];
    }

    return question.type === QuestionType.MultiChoice ? question.answers : [];
  }

  ngOnInit() {
    this.reset();
  }

  selectAnswer(answer: Answer, question: MultiChoiceQuestion) {
    this.answers[question.id] = answer.id;
    this.addResponseToHistory(answer.text);
    this.goToQuestion(answer.nextQuestionId);
  }

  submitResponse(responseInput: HTMLTextAreaElement, question: FreeFormQuestion) {
    let response = responseInput.value;

    if (!response) {
      return;
    }

    responseInput.value = '';

    this.answers[question.id] = response;
    this.addResponseToHistory(response);
    this.goToQuestion(question.nextQuestionId);
  }

  private goToQuestion(questionId?: string) {
    this.currentQuestionId = questionId;

    let question = this.currentQuestion;

    if (question) {
      this.addQuestionToHistory(question);
    } else {
      this.result.emit({
        history: this.history,
        answers: this.answers,
      });
    }
  }

  private addQuestionToHistory(question: Question) {
    this.history.push({
      content: question.text,
      position: 'left',
    });
  }

  private addResponseToHistory(response: string) {
    this.history.push({
      content: response,
      position: 'right',
    });
  }

  reset() {
    this.goToQuestion(this.conversationScript.firstQuestionId);
  }
}
