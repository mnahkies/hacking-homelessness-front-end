import { Component, OnInit } from "@angular/core";
import { Lesson } from "../../interfaces";

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
        uri: "onboarding/questionaire",
        locked: false,
        done: false,
        header: "What is a bank account?",
        details: "Here is an example of some text in a card."
      },
      {
        name: "life skills",
        icon: "dashboard",
        id: "2",
        uri: "onboarding/questionaire",
        locked: true,
        done: false,
        header: "Making pasta",
        details: "Here is an example of some text in a card."
      }
    ];
  }
}
