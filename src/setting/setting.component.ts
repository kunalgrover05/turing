import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../app/entities/state";
import { select } from "@ngrx/store";
import { Observable } from "rxjs";
import { ChangeValue, HideSettings } from "../app/actions";
import { FormControl, Validators } from "@angular/forms";
import { take } from "rxjs/operators";
import { USERNAMES } from "../app/entities/constants";

@Component({
  selector: "app-setting",
  templateUrl: "./setting.component.html",
  styleUrls: ["./setting.component.scss"]
})
export class SettingComponent implements OnInit {
  state$: Observable<State>;
  selectedUsernames: Array<string>;
  includeRetweets: boolean;
  tweetsToShow: string;

  tweetCountControl = new FormControl(null, [Validators.required]);

  usernames = Object.values(USERNAMES);
  constructor(private store: Store<{ state: State }>) {
    this.state$ = store.pipe(select("state"));

    this.state$.pipe(take(1)).subscribe(state => {
      this.selectedUsernames = state.usernames;
      this.tweetCountControl.setValue(state.limit);
      this.includeRetweets = state.showRetweets;
      this.tweetsToShow = state.tweetsToShow;

      this.fixOrderInSelect();
    });

    this.tweetCountControl.valueChanges.subscribe(val => {
      if (this.tweetCountControl.valid) {
        this.store.dispatch(new ChangeValue("limit", val));
      }
    });
  }

  fixOrderInSelect() {
    // Sort usernames to keep last used on top. This would ensure our ordering doesn't break
    this.usernames.sort((x, y) => {
      const x_index = this.selectedUsernames.indexOf(x);
      const y_index = this.selectedUsernames.indexOf(y);
      if (x_index === -1) {
        return 1;
      }
      if (y_index === -1) {
        return -1;
      }

      if (x_index > y_index) {
        return 1;
      }

      return -1;
    });
  }

  ngOnInit() {}

  saveIncludeRetweets() {
    this.store.dispatch(new ChangeValue("showRetweets", this.includeRetweets));
  }

  saveTweetsToShow() {
    this.store.dispatch(new ChangeValue("tweetsToShow", this.tweetsToShow));
  }

  valueSelected(event) {
    this.fixOrderInSelect();
    this.store.dispatch(new ChangeValue("usernames", this.selectedUsernames));
  }

  hideSettings() {
    this.store.dispatch(new HideSettings());
  }
}
