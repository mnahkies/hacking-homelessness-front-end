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
        details: "A bank account is a place to store your money",
        className: 'financeLessonColor'
      },
      {
        name: "life skills",
        icon: "dashboard",
        id: "2",
        locked: true,
        done: false,
        header: "Making pasta",
        details: "Pasta is a filling, tasty, cheap easy meal.",
        className: 'lifeLessonColor'
      },
      {
        name: "health",
        icon: "android",
        id: "1",
        locked: true,
        done: false,
        header: "How to stay active",
        details: "Easy ways of staying fit in a busy city.",
        className: 'healthLessonColor'
      },
      {
        name: "education",
        icon: "dashboard",
        id: "2",
        locked: true,
        done: false,
        header: "Learn new skills",
        details: "Ever wondered what it takes to learn a trade?",
        className: 'educationLessonColor'
      }
    ];
  }
}
