'use strict';

let totalComponents = 0;
let totalUnassigned = 0;

function percentage( components, unassigned ) {
	return ( unassigned / components * 100 ).toFixed( 0 );
}

function output( components, unassigned ) {
	console.log( 'Components: ' + components );
	console.log( 'Unassigned: ' + unassigned );
	console.log( '         %:  ' + percentage( components, unassigned ) );
}

function outputDelimiter() {
	console.log( '------------------------------------------------------------------------------------------------------------------------' );
}

async function data( table ) {
	const components = ( await table.$$( 'tr' ).length - 1 );
	totalComponents = totalComponents + components;

	const unassigned = await table.$$( 'td=Unassigned' ).length;
	totalUnassigned = totalUnassigned + unassigned;
}

describe( 'Developers/Maintainers', () => {
	it( 'should output data', async () => {
		await browser.url( 'w/index.php?title=Developers/Maintainers' ); // current
		// await browser.url( 'w/index.php?title=Developers/Maintainers&oldid=5323169' ); // 2022-07-06
		// await browser.url( 'w/index.php?title=Developers/Maintainers&oldid=5146289' ); // 2022-04-04
		// await browser.url( 'w/index.php?title=Developers/Maintainers&oldid=5009838' ); // 2022-01-09
		const tables = $$( 'table.sortable' );
		await tables.map( ( table ) => data( table ) );
		output( totalComponents, totalUnassigned );
		outputDelimiter();
	} );
} );
