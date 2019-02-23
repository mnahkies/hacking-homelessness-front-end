import { Component, OnInit, Input } from "@angular/core";
import { Lesson } from "../interfaces";

@Component({
  selector: "app-lesson",
  templateUrl: "./lesson.component.html",
  styleUrls: ["./lesson.component.scss"]
})
export class LessonComponent implements OnInit {
  @Input() lesson!: Lesson;

  ngOnInit() {}
}
