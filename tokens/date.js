const dateformat = require( 'dateformat' );
module.exports = ( { method, params: [format, utc = false, date = new Date] } ) => dateformat( date, format, utc );