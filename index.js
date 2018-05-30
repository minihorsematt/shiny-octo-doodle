const Drips = require( './drips' );
const report = require( './report' );
const s3 = require( './s3' );

exports.handler = async ( event, context, callback ) => {
  const record = event.Records[ 0 ];
  const key = decodeURIComponent( record.s3.object.key.replace( /\+/g, ' ' ) );

  report.on( 'done', callback );

  s3.getObject( 'drips-leads', key )
    .then( ( data ) => {
      var drips = new Drips( data );
      drips.error ? report.s3Upload() : drips.insert();
    })
    .catch( ( err ) => {
      report.error = err;
      report.s3Upload();
    });
};
