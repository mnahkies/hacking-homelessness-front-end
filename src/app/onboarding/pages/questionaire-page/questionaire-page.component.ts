import {Component, OnDestroy, OnInit} from '@angular/core';
import {Question, QuestionType} from '../../../interfaces';
import {CoreState} from '../../../state/core.state';
import {Store} from '@ngxs/store';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-questionaire-page',
  templateUrl: './questionaire-page.component.html',
  styleUrls: ['./questionaire-page.component.scss'],
})
export class QuestionairePageComponent implements OnInit, OnDestroy {

  private firstQuestionId?: string;
  private questions: { [questionId: string]: Question } = {};

  private previousQuestionIds: string[] = [];
  private currentQuestionId?: string = this.firstQuestionId;
  private answers: { [questionId: string]: string } = {};

  currentAnswer = '';

  private subscription: Subscription;

  get currentQuestion(): Question | undefined {
    if (!this.currentQuestionId) {
      return undefined;
    }
    return this.questions[this.currentQuestionId];
  }

  constructor(private store: Store) {
    this.subscription = store.select(CoreState.getOnboardingQuestions)
      .subscribe({
        next: (questions) => this.questions = questions,
      });

    this.subscription.add(
      store.select(CoreState.getFirstOnboardingQuestionId)
        .subscribe({
          next: (questionId) => {
            this.firstQuestionId = questionId;
            if (!this.currentQuestionId) {
              this.currentQuestionId = questionId;
            }
          },
        }),
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNext() {
    if (!this.currentAnswer || !this.currentQuestionId) {
      return;
    }

    const question = this.currentQuestion;

    if (!question) {
      // todo
      return;
    }

    this.answers[question.id] = this.currentAnswer;
    this.previousQuestionIds.push(this.currentQuestionId);

    if (question.type === QuestionType.FreeForm) {
      this.currentQuestionId = question.nextQuestionId;
    } else if (question.type === QuestionType.MultiChoice) {
      this.currentQuestionId = question.answers
        .filter(it => it.id === this.currentAnswer)[0].nextQuestionId;
    } else {
      throw new Error('unsupported question type');
    }

    this.currentAnswer = '';

    if (!this.currentQuestionId) {
      console.log('finished!');
      // todo
    }
  }

  onPrev() {
    this.currentQuestionId = this.previousQuestionIds.pop();

    if (!this.currentQuestionId) {
      console.warn('not implemented');
      this.currentQuestionId = this.firstQuestionId;
    }
  }

}

