import { filter, fromEvent, map, mapTo, pluck, range } from "rxjs";

/**
 * Operators
 * are used to manipulate data | transform data from 
 * observabels
 */

/**
 * map receives a value and returns value
 * map<inputType, outputType>
 * map<number, number>
 * map<number, string>
 * ..etc
 */


// range(1,5).pipe(
//     map<number, number>( val => { 
//         return val * 10
//     })
// ).subscribe(  console.log )


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyupCode$ = keyup$.pipe(
    map( event => event.code )
)

const keyupPluck$ = keyup$.pipe(
    //target is a property of the value emitted and baseURI is a proerty
    //inside target, tested, instead of target?.baseURI
    pluck( 'target', 'baseURI' )
);

const keyupMapTo$ = keyup$.pipe(
    mapTo( 'key pressed' )
);

keyupCode$.subscribe( val => console.log('map', val) )
keyupPluck$.subscribe( val => console.log('pluck', val) )
keyupMapTo$.subscribe( val => console.log('pluck', val) )


