var gutil = require('./../node_modules/gulp-util');
var notifier = require('./../node_modules/node-notifier');
var _ = require('./../node_modules/underscore');

var defaultOptions = {
	title: 'Done',
	message: 'Check your terminal!',
	sound: 'Pop',
	icon: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-128.png'
};

var successNotifyImage = 'https://www.secureauth.com/SecureAuth/media/Product/check-mark-11-512_4.png';
var errorNotifyImage = 'https://cdn4.iconfinder.com/data/icons/simplicio/128x128/notification_error.png';

var consola = {

	notify: function (options, state) {
		options.contentImage = (state === true) ? successNotifyImage : errorNotifyImage;
		notifier.notify(_.extend(defaultOptions, options));
	},

	log: function () {
		gutil.log.apply(gutil, arguments);

		for (var args in arguments) {
			args.push(arguments[i]);
		}

    consola.notify({
        message: args.join(' ')
    }, true);
	},

	error: function (error) {
		gutil.log.call(gutil, gutil.colors.red(error));

    consola.notify({
        title:   error.name,
        message: error.message
    }, false);

		// this = gulp?
    this.emit('end');
	}

};

exports.modules = consola;
