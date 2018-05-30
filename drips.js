const csv = require( 'csv' );
const uuid = require( 'uuid' );
const request = require( 'request' );

const report = require( './report' );

class Drips {
  constructor( leads ) {
    this.leads = leads;
    this.url = 'https://api.drips.com/Lead/Insert/' + process.env.DRIPS_SOURCE_TOKEN;
  }

  parse() {
    return new Promise( ( resolve, reject ) => {
      csv.parse( this.leads, { columns: true }, ( err, leads ) => {
        this.error = report.error = err;
        this.leads = leads;
        err ? reject() : resolve();
      });
    });
  }

  insert() {
    return new Promise( ( resolve, reject ) => {
      this._shiftLead( this.leads.shift(), resolve );
    });
  }

  _shiftLead( lead, resolve ) {
    if ( !lead ) return resolve();
    var opts = {
      url: this.url,
      form: {
        LeadId: uuid(),
        Phone: lead[ 'phone' ],
        Email: lead[ 'email' ],
        FirstName: lead[ 'first_name' ],
        LastName: lead[ 'last_name' ]
      }
    };

    request.post( opts, ( err, response, body ) => {
      body = body || {};
      ++report.i;
      err || !( JSON.parse( body ).Success )
        ? report.fail.push( report.i )
        : ++report.success;
      this._shiftLead( this.leads.shift(), resolve );
    });
  }
}

module.exports = Drips;
