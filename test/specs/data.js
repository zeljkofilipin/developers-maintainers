'use strict';

async function table( name, int ) {
	const selector = `table.wikitable:nth-child(${int})`;
	const components = ( await $( selector ).$$( 'tr' ).length - 1 );
	const unassigned = await $( selector ).$$( 'td=Unassigned' ).length;
	const percentage = ( unassigned / components * 100 ).toFixed( 0 );
	console.log( '------------------------------------------------------------------------------------------------------------------------' );
	console.log( name );
	console.log( '- Components: ' + components );
	console.log( '- Unassigned: ' + unassigned );
	console.log( '-          %: ' + percentage );
	console.log( '------------------------------------------------------------------------------------------------------------------------' );
}

describe( 'Developers/Maintainers', () => {
	it( 'should output data', async () => {
		await browser.url( '' );
		await table( 'Core', 17 );
		await table( 'Extensions', 22 );
	} );
} );
