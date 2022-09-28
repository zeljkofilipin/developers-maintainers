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

let totalComponents;
let totalUnassigned;

function percentage( components, unassigned ) {
	return ( unassigned / components * 100 ).toFixed( 0 );
}

function output( date, components, unassigned ) {
	outputDelimiter();
	console.log( 'Date      : ' + date );
	console.log( 'Components: ' + components );
	console.log( 'Unassigned: ' + unassigned );
	console.log( '         %:  ' + percentage( components, unassigned ) );
	outputDelimiter();
}

function outputDelimiter() {
	console.log( '------------------------------------------------------------------------------------------------------------------------' );
}

function data( table ) {
	const components = ( table.$$( 'tr' ).length - 1 );
	totalComponents = totalComponents + components;

	const unassigned = table.$$( 'td=Unassigned' ).length;
	totalUnassigned = totalUnassigned + unassigned;
}

describe( 'Developers/Maintainers', () => {
	it( 'should output data', () => {
		dates.forEach( ( date ) => {
			totalComponents = 0;
			totalUnassigned = 0;
			browser.url( `w/index.php?title=Developers/Maintainers&oldid=${date.oldid}` );
			const tables = $$( 'table.sortable' );
			tables.map( ( table ) => data( table ) );
			output( date.date, totalComponents, totalUnassigned );
		} );
	} );
} );
