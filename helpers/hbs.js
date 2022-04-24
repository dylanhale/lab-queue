const moment = require('moment')

module.exports = {
    //Date Format
    formatDate: function (date, format) {
        return moment(date).format(format)
    },
    ifEmptyOrWhitespace: function (value, options) {
        if (!value) { return options.fn(this); }
        return value.replace(/\s*/g, '').length === 0
            ? options.fn(this)
            : options.inverse(this);
    }
}