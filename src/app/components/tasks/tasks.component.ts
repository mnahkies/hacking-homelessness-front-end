import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {
  constructor() {}

  tasks: { done: boolean; name: string; borderStyle: string }[] = [];
  ngOnInit() {
    this.tasks = [
      {
        done: false,
        name: "Find closest bank",
        borderStyle: "financeTaskColor"
      },
      {
        done: false,
        name: "Learn to cook a new meal",
        borderStyle: "lifeTaskColor"
      }
    ];
  }
}
