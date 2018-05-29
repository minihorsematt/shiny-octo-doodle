const aws = require( 'aws-sdk' );

class S3 {
  constructor() {
    this.s3 = new AWS.S3();
  }

  getObject( bucket, key ) {
    return new Promise( ( resolve, reject ) => {
      var params = {
        Bucket: bucket,
        Key: key
      };

      this.s3.getObject( params, ( err, data ) => {
        err ? reject( err ) : resolve( data );
      });
    });
  }

  upload( bucket, key, body ) {
    return new Promise( ( resolve, reject ) => {
      var params = {
        Bucket: bucket,
        Key: key,
        Body: JSON.stringify( body ),
        ContentType: 'text/json',
        ACL: 'public-read'
      };

      this.s3Bucket.upload( params, ( err, data ) => {
        err ? reject( err ) : resolve( data );
      });
    });
  }
}

module.exports = ( function( s3 ) {
  return {
    getObject: s3.getObject.bind( s3 ),
    upload: s3.upload.bind( s3 )
  };
})( new S3() );
