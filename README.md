
![logo gulpES6ify](https://raw.githubusercontent.com/davesnx/gulpES6ify/master/header.png)
## Initial gulp for develop on ES6 with browserSync, babelify, browserify & watchify
**Modular**, **modern**, **testable**(*soon...*) and **SASSable** way of implementing **ES6 Projects**.
Launching a `BrowserSync` **local** server and **shared** server for live code syncronized:
- **Styles** are compiled with **SASS**, **autprefixed**, **sourcemaped** and **minified**. 
- **Scripts** are transpiled with **BabelJS**, **sourcemaped** and **minified**
- A **watcher** in all the `.html` files and `assets/` directory
- All with a push notification :ok_hand:

###Installation
```
npm install gulp -g
npm install
```

###Usage

```
gulp
```

###Dependencies
- babel
- babelify
- browser-sync
- browserify
- del
- gulp
- gulp-autoprefixer
- gulp-browserify
- gulp-rename
- gulp-rsync
- gulp-sass
- gulp-sourcemaps
- gulp-uglify
- gulp-util
- node-notifier
- node-sass
- vinyl-buffer
- vinyl-source-stream
- watchify
- ...
- want more? :cold_sweat:


___

###Todo
 - Create tests for tasks
 - Create launch tests for ES6
 - Add env=local|dev|prod parameter
