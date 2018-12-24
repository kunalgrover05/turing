import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { format, render, cancel, register } from "timeago.js";
import { Store } from "@ngrx/store";
import { select } from "@ngrx/store";
import { Observable } from "rxjs";
import { MoveSection } from "../app/actions";
import { Tweet } from "../app/entities/tweet";
import { State } from "../app/entities/state";

@Component({
  selector: "app-tweets",
  templateUrl: "./tweets.component.html",
  styleUrls: ["./tweets.component.scss"]
})
export class TweetsComponent implements OnInit {
  state$: Observable<State>;
  tweetsData = {};
  sections = [];

  constructor(http: HttpClient, private store: Store<{ state: State }>) {
    this.state$ = store.pipe(select("state"));
    this.state$.subscribe(s => {
      this.sections = s.usernames;
      const limit = s.limit;
      this.sections.forEach(section => {
        http
          .get(
            "https://intense-bastion-63784.herokuapp.com/1.1/statuses/user_timeline.json?count=" +
              limit.toString() +
              "&screen_name=" +
              section +
              "&tweet_mode=extended"
          )
          .subscribe(data => {
            this.tweetsData[section] = <Array<any>>data;
            this.tweetsData[section] = this.tweetsData[section].map(x => {
              return this.parseTweet(x);
            });
          });
      });
    });
  }

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    console.log("drop");
    this.store.dispatch(
      new MoveSection(event.previousIndex, event.currentIndex)
    );
  }

  parseTweet(tweet): Tweet {
    const media_url =
      tweet.entities.media && tweet.entities.media.length > 0
        ? tweet.entities.media[0].media_url
        : null;
    return <Tweet>{
      text: tweet.full_text,
      media: media_url,
      url:
        "https://twitter.com/" +
        tweet.user.screen_name +
        "/status/" +
        tweet.id_str,
      is_retweet: tweet.retweeted_status != null,
      mentioned_users: tweet.entities.user_mentions,
      human_date: format(tweet.created_at),
      created_at: tweet.created_at
    };
  }
}
