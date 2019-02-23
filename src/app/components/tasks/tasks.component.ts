import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  constructor() {
  }

  tasks: { done: boolean; name: string }[] = [];

  ngOnInit() {
    this.tasks = [
      {
        done: true,
        name: 'Task 1',
      },
      {
        done: true,
        name: 'Task 2',
      },
      {
        done: false,
        name: 'Task 3',
      },
      {
        done: false,
        name: 'Task 4',
      },
    ];
  }
}
