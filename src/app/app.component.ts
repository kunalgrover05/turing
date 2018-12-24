import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { State } from "./entities/state";
import { Observable } from "rxjs";
import { UpdateSettings, HideSettings } from "./actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  state$: Observable<State>;
  state: State;
  title = "turing";

  constructor(private store: Store<{ state: State }>) {
    this.state$ = store.pipe(select("state"));
    this.state$.subscribe(state => {
      this.state = state;
    });
  }

  showSettings() {
    this.store.dispatch(new UpdateSettings());
  }
}
