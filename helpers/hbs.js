const moment = require('moment')

module.exports = {
    //Date Format
    formatDate: function (date, format) {
        return moment(date).format(format)
    }
}