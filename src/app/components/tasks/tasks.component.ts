import { Component, OnInit } from "@angular/core";
import { getStyleForLessonType } from "src/app/getStyleForLessonType";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {
  constructor() {}

  tasks: { done: boolean; name: string; borderStyle: string }[] = [];
  taskStyle: string = "";
  ngOnInit() {
    this.taskStyle = getStyleForLessonType("finance");
    this.tasks = [
      {
        done: true,
        name: "Task 1",
        borderStyle: "financeTaskColor"
      },
      {
        done: true,
        name: "Task 2",
        borderStyle: "financeTaskColor"
      },
      {
        done: false,
        name: "Task 3",
        borderStyle: "financeTaskColor"
      },
      {
        done: false,
        name: "Task 4",
        borderStyle: "careerTaskColor"
      }
    ];
  }
}
