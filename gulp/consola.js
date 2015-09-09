var gutil = require('gulp-util');
var notifier = require('node-notifier');
var lodash = require('lodash');

var defaultOptions = {
	title: 'Done',
	message: 'Check your terminal!',
	sound: 'Pop',
	icon: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-128.png'
}

module.exports = {
	notify: function (options) {
		notifier.notify(_.extend(defaultOptions, options));
	},
	notifyWithState: function (options, state) {
		if (state === true) {
			options.contentImage = options.contentImage || 'https://www.secureauth.com/SecureAuth/media/Product/check-mark-11-512_4.png';
		} else {
			options.contentImage = options.contentImage || 'https://cdn4.iconfinder.com/data/icons/simplicio/128x128/notification_error.png';
		}
    this.notify(options);
	},
	log: function () {
		gutil.log.apply(gutil, arguments);

		for (var args in arguments) {
			args.push(arguments[i]);
		}

    this.notifyWithState({
        message: args.join(' ')
    }, true);
	},
	error: function (error) {
		gutil.log.call(gutil, gutil.colors.red(error));

    this.notifyWithState({
        title:   error.name,
        message: error.message
    }, false);

		// this = gulp?
    this.emit('end');
	}
};
