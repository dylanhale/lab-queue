const moment = require('moment')

module.exports = {
    formatDate: function (date, format) {
        return moment(date).format(format)
    },
    select: function (selected, options){
        return options
            .fn(this)
            .replace(
                new RegExp('value="' + selected + '"'),
                '$& selected="selected"'
            )
            .replace(
                new RegExp('>' + selected + '</option>'),
                ' selected="selected"$&'
            )
    },
    deleteRequest: function (requestUser, loggedUser, requestId, floating = true) {
        if (requestUser._id.toString() == loggedUser._id.toString()) {
          if (floating) {
            return `<a href="/stories/edit/${requestId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`
          } else {
            return `<a href="/stories/edit/${requestId}"><i class="fas fa-edit"></i></a>`
          }
        } else {
          return ''
        }
    }
}