import {Component} from '@angular/core';
import {Store} from '@ngxs/store';
import {CoreState} from '../../state/core.state';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent {
  points: number = 0;

  get hidePoints() {
    return this.points === 0;
  }

  constructor(store: Store) {
    store.select(CoreState.getScore)
      .subscribe({next: v => this.points = v});
  }
}
