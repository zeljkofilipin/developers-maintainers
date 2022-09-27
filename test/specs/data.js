'use strict';

describe( 'Developers/Maintainers', () => {
	it( 'should output data', async () => {
		await browser.url( '' );

		// core
		const coreComponents = ( await $( 'table.wikitable:nth-child(17)' ).$$( 'tr' ).length - 1 );
		const coreUnassigned = await $( 'table.wikitable:nth-child(17)' ).$$( 'td=Unassigned' ).length;
		const corePercentage = ( coreUnassigned / coreComponents * 100 ).toFixed( 0 );

		// extensions
		const extensionsComponents = ( await $( 'table.wikitable:nth-child(22)' ).$$( 'tr' ).length - 1 );
		const extensionsUnassigned = await $( 'table.wikitable:nth-child(22)' ).$$( 'td=Unassigned' ).length;
		const extensionsPercentage = ( extensionsUnassigned / extensionsComponents * 100 ).toFixed( 0 );

		console.log( '------------------------------------------------------------------------------------------------------------------------' );
		console.log( 'Core' );
		console.log( '- Components: ' + coreComponents );
		console.log( '- Unassigned: ' + coreUnassigned );
		console.log( '-          %: ' + corePercentage );
		console.log( '------------------------------------------------------------------------------------------------------------------------' );
		console.log( 'Extensions' );
		console.log( '- Components: ' + extensionsComponents );
		console.log( '- Unassigned: ' + extensionsUnassigned );
		console.log( '-          %: ' + extensionsPercentage );
		console.log( '------------------------------------------------------------------------------------------------------------------------' );
	} );
} );
