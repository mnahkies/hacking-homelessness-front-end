import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";
import {
  Answer,
  ConversationScript,
  ConversationScriptResult,
  FreeFormQuestion,
  MultiChoiceQuestion,
  Question,
  QuestionType
} from "../../interfaces";

interface Message {
  content: string;
  position: "left" | "right";
}

interface LinkMessage extends Message {
  url: string;
  previewImage: string;
}

@Component({
  selector: "app-conversation",
  templateUrl: "./conversation.component.html",
  styleUrls: ["./conversation.component.scss"]
})
export class ConversationComponent implements OnInit {
  @Input() conversationScript!: ConversationScript;
  answers: { [questionId: string]: string } = {};

  @Input()
  continueLink: string = "/home";

  @Output()
  result = new EventEmitter<ConversationScriptResult>();

  @ViewChild(".scroll-anchor") scrollAnchor!: HTMLBRElement;

  readonly history: (Message | LinkMessage)[] = [];

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

  submitResponse(
    responseInput: HTMLTextAreaElement,
    question: FreeFormQuestion
  ) {
    let response = responseInput.value;

    if (!response) {
      return;
    }

    responseInput.value = "";

    this.answers[question.id] = response;
    this.addResponseToHistory(response);
    this.goToQuestion(question.nextQuestionId);
  }

  private goToQuestion(questionId?: string) {
    this.currentQuestionId = questionId;

    let question = this.currentQuestion;

    if (question) {
      this.addQuestionToHistory(question);

      if (question.type === QuestionType.Statement) {
        let nextQuestionId = question.nextQuestionId;

        //TODO set timeout after transition in finished
        setTimeout(() => {
          this.goToQuestion(nextQuestionId);
        }, 1500);
      }
    } else {
      this.result.emit({
        history: this.history,
        answers: this.answers
      });
    }

    setTimeout(function() {
      let inp: HTMLInputElement | null = document.querySelector(
        "input[name='response']"
      );

      if (inp) {
        inp.focus();
      }
    }, 10);
  }

  private addQuestionToHistory(question: Question) {
    if (question.type === QuestionType.Link) {
      this.history.push({
        content: question.text,
        position: "left",
        url: question.url,
        previewImage: question.previewImage
      });
    } else {
      this.history.push({
        content: question.text,
        position: "left"
      });
    }
  }

  private addResponseToHistory(response: string) {
    this.history.push({
      content: response,
      position: "right"
    });
  }

  reset() {
    this.goToQuestion(this.conversationScript.firstQuestionId);
  }
}
