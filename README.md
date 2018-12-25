# Turing

Project requirements for Turing Frontend project.

## Backend?
Backend server is a Twitter proxy server deployed on Heroku.

## Dependencies
* Angular@7 with RxJS@6
* ngrx/store -> Redux store for Angular
* moment -> Simple date manipulation library
* timeago.js -> Render human dates
* ngrx-store-localstorage -> Localstorage sync for Redux store
* angular/material -> Material components for Angular
* angular/flex-layout -> Responsive Flex layout
* Fontawesome -> Icons


## Try it out
https://kunalgrover05.github.io/turing/

Features:
- View tweets from available handles. Customize which handles to view tweets from using settings.
- Reorder tweet columns using Drag and drop. (Enable settings mode first)
- All settings persist across reloads.
- View Retweets separately and hide them using Settings.
- Click on tweet to open the tweet
- Customize tweets to show: Today / Earlier / All (This is done at Frontend level since the API doesn't have this)
- Customize number of tweets to fetch from API.

Bugs:
- Scrolling on tweet divs is broken on mobile devices. Use the left empty area to scroll.
