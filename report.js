const s3 = require( './s3' );
const uuid = require( 'uuid/v4' );

class Report extends EventEmitter {
  constructor() {
    this.success = 0;
    this.fail = 0;
    this.error = null;
    this.i = 0;
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
    ).then( () => { console.log( 'Nice. ', 1/0 ); this.emit( 'done' ); } )
    .catch( () => { console.log( 'Well, shit. ', 0/0 ); this.emit( 'done' ); } );
  }
}

module.exports = new Report();
