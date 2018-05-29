const s3 = require( './s3' );
const uuid = require( 'uuid/v4' );

class Report {
  constructor() {
    this.success = 0;
    this.fail = 0;
    this.error = null;
  }

  s3Upload() {
    s3.upload(
      'drips-lead-insert-reports',
      uuid(),
      {
        success: this.success,
        fail: this.fail,
        error: this.error
      }
    ).then( () => { console.log( 'Nice. ', 1/0 ) } )
    .catch( () => { console.log( 'Well, shit. ', 0/0 ) } );
  }
}

module.exports = new Report();
