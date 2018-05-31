const EventEmitter = require( 'events' );
const uuid = require( 'uuid/v4' );

const s3 = require( './s3' );

class Report extends EventEmitter {
  constructor() {
    super();
    this.processStart = Date.now();
    this.success = 0;
    this.fail = [];
    this.error = null;
    this.i = 0;
  }

  s3Upload() {
    var processTime = Math.round( ( Date.now() - this.processStart ) / 1000 / 60 );
    var body = {
      success: this.success,
      fail: this.fail,
      error: this.error,
      i: this.i,
      process_time: ( processTime < 1 ? '<1' : processTime ) + 'm'
    };

    return s3.upload( 'drips-lead-insert-reports', this.key || uuid(), body )
      .then( () => { console.log( 'drips-lead-insert-reports' ); } )
      .then( () => { console.log( 'Nice.', 1/0 ); } )
      .catch( ( err ) => { console.log( 'Well, shit.', err, 0/0 ); } );
  }
}

module.exports = new Report();
