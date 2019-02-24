import {Component} from '@angular/core';
import {Store} from '@ngxs/store';
import {CoreState} from '../../state/core.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent {
  points$: Observable<number>;

  constructor(store: Store) {
    this.points$ = store.select(CoreState.getScore);
  }
}
