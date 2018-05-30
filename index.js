const Drips = require( './drips' );
const report = require( './report' );
const s3 = require( './s3' );

exports.handler = async ( event, context, callback ) => {
  const record = event.Records[ 0 ];
  const key = decodeURIComponent( record.s3.object.key.replace( /\+/g, ' ' ) );

  var leads = await s3.getObject( 'drips-leads', key );
  if ( !leads ) {
    report.error = 'S3:getObject';
    await report.s3Upload();
    return false;
  }

  var drips = new Drips( leads );
  await drips.parse();
  if ( drips.error ) {
    report.error = 'Drips:csvParse';
    await report.s3Upload();
    return false;
  }

  await drips.insert();
  await report.s3Upload();
  return true;
};
