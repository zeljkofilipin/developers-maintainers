'use strict';

async function table( name, int ) {
	const selector = `table.wikitable:nth-child(${int})`;
	const components = ( await $( selector ).$$( 'tr' ).length - 1 );
	const unassigned = await $( selector ).$$( 'td=Unassigned' ).length;
	const percentage = ( unassigned / components * 100 ).toFixed( 0 );
	console.log( name );
	console.log( '- Components: ' + components );
	console.log( '- Unassigned: ' + unassigned );
	console.log( '-          %: ' + percentage );
}

describe( 'Developers/Maintainers', () => {
	it( 'should output data', async () => {
		await browser.url( '' );
		console.log( '------------------------------------------------------------------------------------------------------------------------' );
		await table( 'MediaWiki core', 17 );
		await table( 'MediaWiki extensions', 22 );
		await table( 'MediaWiki skins', 27 );
		await table( 'MediaWiki core libraries', 33 );
		await table( 'MediaWiki extension libraries', 35 );
		await table( 'Services and administration', 45 );
		// await table( 'Data Engineering', 52);
		await table( 'Misc', 52 );
		console.log( '------------------------------------------------------------------------------------------------------------------------' );
	} );
} );
