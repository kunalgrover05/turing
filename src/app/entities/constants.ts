import { State } from "./state";

export const TWEETS_TO_SHOW_OPTIONS = {
  ALL: "All",
  TODAY: "Today",
  EARLIER: "Earlier"
};

export const USERNAMES = {
  MAKESCHOOL: "@makeschool",
  YCOMBINATOR: "@ycombinator",
  NEWSYCOMBINATOR: "@newsycombinator",
  MASHABLE: "@mashable",
  WIRED: "@WIRED",
  TECHCRUNCH: "@TechCrunch"
};

export const INITIAL_STATE: State = {
  settingsVisible: false,
  limit: 30,
  showRetweets: true,
  usernames: [
    USERNAMES.MAKESCHOOL,
    USERNAMES.YCOMBINATOR,
    USERNAMES.NEWSYCOMBINATOR
  ],
  tweetsToShow: TWEETS_TO_SHOW_OPTIONS.ALL
};
