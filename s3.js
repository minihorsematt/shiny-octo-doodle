const AWS = require( 'aws-sdk' );

class S3 {
  constructor() {
    this.service = new AWS.S3();
  }

  getObject( bucket, key ) {
    return new Promise( ( resolve, reject ) => {
      var params = {
        Bucket: bucket,
        Key: key
      };

      this.service.getObject( params, ( err, data ) => {
        err ? reject( null ) : resolve( data.Body.toString( 'utf8' ) );
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

      this.service.upload( params, ( err, data ) => {
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
