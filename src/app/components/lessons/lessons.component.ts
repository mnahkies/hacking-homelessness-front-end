import { Component, OnInit } from "@angular/core";
import { Lesson } from "../../interfaces";
import { getStyleForLessonType } from "src/app/getStyleForLessonType";

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
        name: "money",
        icon: "android",
        id: "1",
        locked: false,
        done: false,
        header: "What is a bank account?",
        details: "Here is an example of some text in a card.",
        className: getStyleForLessonType("finance")
      },
      {
        name: "life skills",
        icon: "dashboard",
        id: "2",
        locked: true,
        done: false,
        header: "Making pasta",
        details: "Here is an example of some text in a card.",
        className: getStyleForLessonType("career")
      },
      {
        name: "money",
        icon: "android",
        id: "1",
        locked: true,
        done: false,
        header: "What is a bank account?",
        details: "Here is an example of some text in a card.",
        className: getStyleForLessonType("finance")
      },
      {
        name: "life skills",
        icon: "dashboard",
        id: "2",
        locked: true,
        done: false,
        header: "Making pasta",
        details: "Here is an example of some text in a card.",
        className: getStyleForLessonType("career")
      }
    ];
  }
}
