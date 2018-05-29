const csv = require( csv );

const report = require( './report' );

class Drips {
  constructor( data ) {
    csv.parse( data, function( err, data ) {
      this.error = report.error = err;
      this.data = data;
    });
  }
}

module.exports = Drips;
