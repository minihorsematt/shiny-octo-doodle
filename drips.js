const csv = require( 'csv' );
const uuid = require( 'uuid' );

const report = require( './report' );

class Drips {
  constructor( data ) {
    this.url = 'https://api.drips.com/Lead/Insert/' + process.env.DRIPS_SOURCE_TOKEN;

    csv.parse( data, function( err, data ) {
      this.error = report.error = err;
      this.data = data;
    });
  }

  insert() {
    console.log( 'Drips:insert:data', this.data );
    if ( !data.length ) return this._done();
    var lead = data.shift();
    var opts = {
      url: this.url,
      form: {
        LeadId: uuid(),
        Phone: lead[ 'Public Leads Phone' ],
        Email: lead[ 'Public Leads Email' ],
        FirstName: lead[ 'Public Leads First Name' ]
      }
    };

    request.post( opts, ( err, response, body ) => {
      console.log( 'Drips:insert:body', body );
      report.i++;
      err ? report.fail++ : report.success++;
      this.insert();
    });
  }

  _done() {
    report.s3Upload();
  }
}

module.exports = Drips;
