'use strict';

const dates = [
	{ date: '2021-10-01',
		oldid: '4842249' },
	{ date: '2022-01-09',
		oldid: '5009838' },
	{ date: '2022-04-04',
		oldid: '5146289' },
	{ date: '2022-07-06',
		oldid: '5323169' },
	{ date: '2022-09-20',
		oldid: '5470936' }
];

let totalComponents = 0;
let totalUnassigned = 0;

function percentage( components, unassigned ) {
	return ( unassigned / components * 100 ).toFixed( 0 );
}

function output( components, unassigned ) {
	outputDelimiter();
	console.log( 'Components: ' + components );
	console.log( 'Unassigned: ' + unassigned );
	console.log( '         %:  ' + percentage( components, unassigned ) );
	outputDelimiter();
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
		await browser.url( 'w/index.php?title=Developers/Maintainers' ); // 2022-09-27
		// await browser.url( 'w/index.php?title=Developers/Maintainers&oldid=5323169' ); // 2022-07-06
		// await browser.url( 'w/index.php?title=Developers/Maintainers&oldid=5146289' ); // 2022-04-04
		// await browser.url( 'w/index.php?title=Developers/Maintainers&oldid=5009838' ); // 2022-01-09
		// await browser.url( 'w/index.php?title=Developers/Maintainers&oldid=4842249' ); // 2021-10-01
		const tables = $$( 'table.sortable' );
		await tables.map( ( table ) => data( table ) );
		output( totalComponents, totalUnassigned );
	} );
} );
