import * as through from 'through2';
import * as es from 'event-stream';
import path from 'path';

import gutil from 'gulp-util';
import config from './../../config';

import notifier from 'node-notifier';

export default (param = '') => {

  let message = `${param}`;

  let stream = es.through(
    function write(data) {
      gutil.log(gutil.colors.yellow(message));
      notifier.notify({
        'title': config.info,
        'message': message,
        'wait': false
      });
      this.emit('data', data);
    },
    function end () {
      this.emit('end');
    }
  );

  return stream;
};
