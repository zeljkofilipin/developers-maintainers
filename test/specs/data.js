'use strict';
describe( 'Developers/Maintainers', () => {
	it( 'should output data', async () => {
		await browser.url( '' );
		// await browser.debug();
		const size = ( await $( 'table.wikitable:nth-child(52)' ).$$( 'tr' ).length - 1 );
		console.log( '----------' );
		console.log( size );
		console.log( '----------' );
	} );
} );
