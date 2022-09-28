'use strict';

const dates = [
	{ date: '2019-01-03',
		oldid: '3036807' },
	{ date: '2019-04-24',
		oldid: '3205911' },
	{ date: '2019-07-10',
		oldid: '3309076' },
	{ date: '2019-10-03',
		oldid: '2905633' },

	{ date: '2020-01-20',
		oldid: '3598102' },
	{ date: '2020-04-03',
		oldid: '3753592' },
	{ date: '2020-07-13',
		oldid: '3961000' },
	{ date: '2020-10-02',
		oldid: '4148426' },

	{ date: '2021-01-12',
		oldid: '4340058' },
	{ date: '2021-04-06',
		oldid: '4514091' },
	{ date: '2021-07-13',
		oldid: '4703470' },
	{ date: '2021-10-01',
		oldid: '4842249' },

	{ date: '2022-01-09',
		oldid: '5009838' },
	{ date: '2022-04-04',
		oldid: '5146289' },
	{ date: '2022-07-05',
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
