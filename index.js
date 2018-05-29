const aws = require( 'aws-sdk' );

const s3 = require( './s3' );

exports.handler = async ( event, context, callback ) => {
  const record = event.Records[ 0 ];
  const bucket = record.s3.bucket.name;
  const key = decodeURIComponent( record.s3.object.key.replace( /\+/g, ' ' ) );

  s3.getObject( key )
    .then( ( data ) => {} )
    .catch( ( err ) => {} );
};
