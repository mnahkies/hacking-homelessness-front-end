import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConversationScript, ConversationScriptResult} from '../../interfaces';
import {Store} from '@ngxs/store';
import {CoreState} from '../../state/core.state';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-questionnaire-page',
  templateUrl: './onboarding-questionnaire-page.component.html',
  styleUrls: ['./onboarding-questionnaire-page.component.scss'],
})
export class OnboardingQuestionnairePageComponent implements OnInit, OnDestroy {

  conversationScript?: ConversationScript;

  private subscription = Subscription.EMPTY;

  constructor(readonly store: Store) {

  }

  ngOnInit() {
    this.subscription = this.store.select(CoreState.getOnboardingConversationScript)
      .subscribe(it => this.conversationScript = it);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onScriptCompleted(result: ConversationScriptResult) {
    console.info('conversation completed with result', result);
    // todo
  };

}
