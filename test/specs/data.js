'use strict';

const chartWidth = 1600; // 700

const pages = [
	{ date: '2017-01-28',
		oldid: '2376817' },
	{ date: '2017-04-01',
		oldid: '2435161' },
	{ date: '2017-07-06',
		oldid: '2181417' },
	{ date: '2017-10-03',
		oldid: '2577123' },

	{ date: '2018-01-02',
		oldid: '2677753' },
	{ date: '2018-04-03',
		oldid: '2751248' },
	{ date: '2018-07-05',
		oldid: '2822198' },
	{ date: '2018-10-03',
		oldid: '2905633' },

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

	{ date: '2021-01-20',
		oldid: '4358135' },
	{ date: '2021-04-06',
		oldid: '4514091' },
	{ date: '2021-07-13',
		oldid: '4703470' },
	{ date: '2021-10-01',
		oldid: '4842249' },

	{ date: '2022-01-17',
		oldid: '5022690' },
	{ date: '2022-04-04',
		oldid: '5146289' },
	{ date: '2022-07-05',
		oldid: '5323169' },
	{ date: '2022-10-03',
		oldid: '5502573' },

	{ date: '2023-01-08',
		oldid: '5704549' }
];

function chart( x, y, yAxisTitle, width ) {
	return `{{Graph:Chart|width=${width}|height=100|xAxisTitle=Date|yAxisTitle=${yAxisTitle}|type=rect|showValues=|x=${x}|y=${y}}}`;
}

function percentage( components, unassigned ) {
	return ( unassigned / components * 100 ).toFixed( 0 );
}

function x( dates ) {
	return dates.map( ( date ) => date.date ).join();
}

function yComponents( data ) {
	return data.map( ( datum ) => datum.components ).join();
}
function yUnassigned( data ) {
	return data.map( ( datum ) => datum.unassigned ).join();
}

function yUnassignedPercentage( data ) {
	return data.map( ( datum ) => percentage( datum.components, datum.unassigned ) ).join();
}

function componentsFromTable( table ) {
	return ( table.$$( 'tr' ).length - 1 );
}

function componentsFromTables( tables ) {
	return tables.map( ( table ) => componentsFromTable( table ) ).reduce( ( total, current ) => {
		return total + current;
	}, 0 );
}

function componentsAndUnassignedFromPage( page ) {
	browser.url( `w/index.php?title=Developers/Maintainers&oldid=${page.oldid}` );
	console.log( browser.getUrl() );
	const tables = $$( 'table.sortable' );

	return { components: componentsFromTables( tables ),
		unassigned: unassignedFromTables( tables ) };
}

function componentsAndUnassignedFromPages( pages ) {
	return pages.map( ( page ) => {
		return componentsAndUnassignedFromPage( page );
	} );
}

function thsFromTable( table ) {
	return table.$$( 'th' ).map( ( th ) => {
		return th.getText();
	} );
}

function stewardColumnFromThs( ths ) {
	if ( ths.includes( 'Steward' ) ) {
		return ths.indexOf( 'Steward' );
	} else if ( ths.includes( 'Code Stewards' ) ) {
		return ths.indexOf( 'Code Stewards' );
	} else if ( ths.includes( 'Code Steward' ) ) {
		return ths.indexOf( 'Code Steward' );
	} else if ( ths.includes( 'Responsible Wikimedia team' ) ) {
		return ths.indexOf( 'Responsible Wikimedia team' );
	} else {
		return 0;
	}
}

function unassignedFromTable( table ) {
	const stewardColumn = stewardColumnFromThs( thsFromTable( table ) );
	const zerosAndOnes = table.$( 'tbody' ).$$( 'tr' ).map( ( tr ) => {
		const td = tr.$$( 'td' )[ stewardColumn ].getText();
		if ( td === 'Unassigned' || td === '' || td === '???' ) {
			return 1;
		} else { return 0; }
	}
	);
	return zerosAndOnes.reduce( ( total, current ) => {
		return total + current;
	}, 0 );
}

function unassignedFromTables( tables ) {
	return tables.map( ( table ) => unassignedFromTable( table ) ).reduce( ( total, current ) => {
		return total + current;
	}, 0 );
}

describe( 'Developers/Maintainers', () => {
	it( 'should create charts', () => {
		const componentsAndUnassigned = componentsAndUnassignedFromPages( pages );
		console.log( chart( x( pages ), yComponents( componentsAndUnassigned ), 'Components', chartWidth ) );
		console.log( chart( x( pages ), yUnassigned( componentsAndUnassigned ), 'Unassigned', chartWidth ) );
		console.log( chart( x( pages ), yUnassignedPercentage( componentsAndUnassigned ), 'Unassigned %', chartWidth ) );
	} );
} );
