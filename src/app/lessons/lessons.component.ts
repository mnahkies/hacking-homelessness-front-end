import { Component, OnInit } from "@angular/core";
import { Lesson } from "../interfaces";

@Component({
  selector: "app-lessons",
  templateUrl: "./lessons.component.html",
  styleUrls: ["./lessons.component.scss"]
})
export class LessonsComponent implements OnInit {
  constructor() {}
  lessons: Lesson[] = [];
  ngOnInit() {
    this.lessons = [
      {
        name: "lesson 1",
        icon: "android",
        id: "1"
      },
      {
        name: "lesson 2",
        icon: "dashboard",
        id: "2"
      }
    ];
  }
}
