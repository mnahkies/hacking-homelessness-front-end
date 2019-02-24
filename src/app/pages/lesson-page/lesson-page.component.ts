import {Component, OnInit} from '@angular/core';
import {ConversationScript, ConversationScriptResult} from '../../interfaces';
import {Subscription} from 'rxjs';
import {Store} from '@ngxs/store';
import {CoreState} from '../../state/core.state';
import {IncreaseScore} from '../../state/core.actions';

@Component({
  selector: 'app-lesson-page',
  templateUrl: './lesson-page.component.html',
  styleUrls: ['./lesson-page.component.scss'],
})
export class LessonPageComponent implements OnInit {

  conversationScript?: ConversationScript;

  private subscription = Subscription.EMPTY;

  constructor(readonly store: Store) {
  }

  ngOnInit() {
    this.subscription = this.store.select(CoreState.getFinanceLessonConversationScript)
      .subscribe(it => this.conversationScript = it);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onScriptCompleted(result: ConversationScriptResult) {
    console.info('conversation completed with result', result);
    // todo persist
    this.store.dispatch(new IncreaseScore(20))
  };
}
