import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-header",
  templateUrl: "./nav-header.component.html",
  styleUrls: ["./nav-header.component.scss"]
})
export class NavHeaderComponent implements OnInit {
  points: string = "0";
  constructor() {}

  ngOnInit() {
    this.points = "240";
  }
}
