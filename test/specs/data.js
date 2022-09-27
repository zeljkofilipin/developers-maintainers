'use strict';

let totalComponents = 0;
let totalUnassigned = 0;

function percentage( components, unassigned ) {
	return ( unassigned / components * 100 ).toFixed( 0 );
}

function output( name, components, unassigned ) {
	console.log( name );
	console.log( '- Components: ' + components );
	console.log( '- Unassigned: ' + unassigned );
	console.log( '-          %: ' + percentage( components, unassigned ) );
}

function outputDelimiter() {
	console.log( '------------------------------------------------------------------------------------------------------------------------' );
}

async function table( name, int ) {
	const selector = `table.wikitable:nth-child(${int})`;

	const components = ( await $( selector ).$$( 'tr' ).length - 1 );
	totalComponents = totalComponents + components;

	const unassigned = await $( selector ).$$( 'td=Unassigned' ).length;
	totalUnassigned = totalUnassigned + unassigned;

	output( name, components, unassigned );
}

describe( 'Developers/Maintainers', () => {
	it( 'should output data', async () => {
		await browser.url( '' );
		outputDelimiter();
		await table( 'MediaWiki core', 17 );
		await table( 'MediaWiki extensions', 22 );
		await table( 'MediaWiki skins', 27 );
		await table( 'MediaWiki core libraries', 33 );
		await table( 'MediaWiki extension libraries', 35 );
		await table( 'Services and administration', 45 );
		await table( 'Data Engineering', 50 );
		await table( 'Misc', 52 );
		output( 'Total', totalComponents, totalUnassigned );
		outputDelimiter();
	} );
} );
