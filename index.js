/*
 *
 * Primary file for the API
 * 
 */
const http = require( 'http' );
const url = require( 'url' );
const StringDecoder = require( 'string_decoder' ).StringDecoder;
//Configure the server to respond to all calls with a string on Port 3000
let server = http.createServer( function( req, res ) {
	//ignore favicon.
	if ( req.url != '/favicon.ico' ) {
		//get the url
		let parsedURL = url.parse( req.url, true );
		//get the url path
		let path = parsedURL.pathname;
		let trimmedPath = path.replace( /^\/+|\/+$/g, '' );
		//get the request method
		let method = req.method.toLowerCase();
		//get the query object.
		let querystr = parsedURL.query;
		//get the payloads
		let decoder = new StringDecoder( 'utf-8' );
		let buffer = '';
		//Write data of the request as payload as utf-8
		req.on( 'data', function( data ) {
			buffer += decoder.write( data );
		} );
		//end method on 
		req.on( 'end', function() {
			buffer += decoder.end();
			//send response header
			res.writeHead( 200, {
				'Content-type': 'text/plain'
			} );
			///send response on end of the request.
			res.end( 'Hello World!\n' );
			console.log( "Payload was recieved : " +buffer );
		} );
		//log the request and method.
	}
} );
server.listen( 3000, function() {
	console.log( "Server is running now" )
} );
