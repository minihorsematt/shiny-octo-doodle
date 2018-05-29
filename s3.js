const aws = require( 'aws-sdk' );

class S3 {
  constructor() {
    this.s3Bucket = new AWS.S3({
      params: { Bucket: 'drips-leads' }
    });
  }

  getObject( key ) {
    return new Promise( ( resolve, reject ) => {
      var params = { Key: key };

      this.s3Bucket.getObject( params, ( err, data ) => {
        err ? reject( err ) : resolve( data );
      });
    });
  }

  upload( key, body ) {
    return new Promise( ( resolve, reject ) => {} );
  }
}

module.exports = ( function( s3 ) {
  return {
    getObject: s3.getObject.bind( s3 ),
    upload: s3.upload.bind( s3 )
  };
})( new S3() );
