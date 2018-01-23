'use strict';

var exec = require('cordova/exec');

var sms = {};

function convertPhoneToArray(phone) {
    if (typeof phone === 'string' && phone.indexOf(',') !== -1) {
        phone = phone.split(',');
    }
    if (Object.prototype.toString.call(phone) !== '[object Array]') {
        phone = [phone];
    }
    return phone;
}


sms.send = function(phone, message, options, success, failure) {
    // parsing phone numbers
    phone = convertPhoneToArray(phone);

    // parsing options
    const replaceLineBreaks = options.replaceLineBreaks || false;

    // fire
    exec(
        success,
        failure,
        'Sms',
        'send', [phone, message, replaceLineBreaks]
    );
};

module.exports = sms;