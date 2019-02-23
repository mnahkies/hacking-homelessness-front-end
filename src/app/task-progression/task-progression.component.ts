import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-progression',
  templateUrl: './task-progression.component.html',
  styleUrls: ['./task-progression.component.scss'],
})
export class TaskProgressionComponent implements OnInit {
  constructor() {
  }

  currentTaskProgressStatus = 0;

  ngOnInit() {
    this.currentTaskProgressStatus = (1 / 4) * 100;
  }
}
