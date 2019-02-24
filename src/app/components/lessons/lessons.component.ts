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
        locked: false,
        done: false,
        header: "What is a bank account?",
        details: "Here is an example of some text in a card.",
        className: 'financeLessonColor'
      },
      {
        name: "life skills",
        icon: "dashboard",
        id: "2",
        locked: true,
        done: false,
        header: "Making pasta",
        details: "Here is an example of some text in a card.",
        className: 'lifeLessonColor'
      },
      {
        name: "health",
        icon: "android",
        id: "1",
        locked: true,
        done: false,
        header: "How to stay active",
        details: "Here is an example of some text in a card.",
        className: 'healthLessonColor'
      },
      {
        name: "education",
        icon: "dashboard",
        id: "2",
        locked: true,
        done: false,
        header: "Learn something new today",
        details: "Here is an example of some text in a card.",
        className: 'educationLessonColor'
      }
    ];
  }
}
