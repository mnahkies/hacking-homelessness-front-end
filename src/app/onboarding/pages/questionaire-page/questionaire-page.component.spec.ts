import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionairePageComponent} from './questionaire-page.component';
import {OnboardingModule} from '../../onboarding.module';
import {NgxsModule} from '@ngxs/store';
import {CoreState} from '../../../state/core.state';
import {RouterTestingModule} from '@angular/router/testing';

describe('QuestionairePageComponent', () => {
  let component: QuestionairePageComponent;
  let fixture: ComponentFixture<QuestionairePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([CoreState]),
        OnboardingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionairePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
