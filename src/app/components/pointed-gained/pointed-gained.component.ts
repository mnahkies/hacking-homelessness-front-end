import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IncreaseScore } from "src/app/state/core.actions";
import { Store } from "@ngxs/store";

@Component({
  selector: "app-pointed-gained",
  templateUrl: "./pointed-gained.component.html",
  styleUrls: ["./pointed-gained.component.scss"]
})
export class PointedGainedComponent implements OnInit {
  constructor(private router: Router, readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(new IncreaseScore(20));
    setTimeout(() => {
      this.router.navigate(["home"]);
    }, 2000);
  }
}
