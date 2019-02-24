import {Component, OnInit} from '@angular/core';

interface Achievement {
  points: number
  category: string
}

interface Streak {
  headerColor: string
  title: string
  message: string
}

@Component({
  selector: 'app-achievements-page',
  templateUrl: './achievements-page.component.html',
  styleUrls: ['./achievements-page.component.scss'],
})
export class AchievementsPageComponent implements OnInit {
  achievements: Achievement[] = [
    {category: 'Managing Money', points: 20},
    {category: 'Health and wellbeing', points: 0},
    {category: 'Life skills', points: 10},
    {category: 'Education and school', points: 0},
    {category: 'Getting a job', points: 0},
    {category: 'Housing and rent', points: 0},
  ];
  achievementsColumns = ['category', 'points'];

  streaks: Streak[] = [
    {headerColor: 'streak-yellow', title: 'Topic Streak', message: '3 topics done in a day!'},
    {headerColor: 'streak-peach', title: 'Daily Streak', message: 'Learning 3 days in a row'},
    {headerColor: 'streak-yellow', title: 'Something Streak', message: '10 somethings done in a day!'},
    {headerColor: 'streak-peach', title: 'Yearly Streak', message: 'Learning 2 years in a row'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
