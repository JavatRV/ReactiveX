import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

/**
 * The scan operator in RxJS is like reduce, 
 * but it emits the accumulated result 
 * on each emission, not just at the end.
 * It’s useful for tracking state changes over time.
 * Think of it as a running total or a live accumulator.
 */
// const numeros = [1,2,3,4,5];

// // const totalAcumulador = (acc, cur) => {
// //     return acc + cur;
// // }
// const totalAcumulador = (acc, cur) => acc + cur;

// // Reduce
// // return value at the end
// from( numeros ).pipe(
//     reduce( totalAcumulador, 0 )
// )
// .subscribe( console.log );

// // Scan
// // returns value when value changes
// from( numeros ).pipe(
//     scan( totalAcumulador, 0 )
// )
// .subscribe( console.log );

// Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'fher', autenticado: false, token: null },
    { id: 'fher', autenticado: true, token: 'ABC' },
    { id: 'fher', autenticado: true, token: 'ABC123' },
];

/**
 * Si dos propiedades tienen la misma clave, la última en aparecer sobrescribe a la anterior.
Entonces, en tu scan:
(acc, cur) => ({ ...acc, ...cur })
Esto significa:

...acc pone todas las propiedades del acumulador actual en el nuevo objeto.

...cur pone todas las propiedades del nuevo valor (el siguiente elemento del array).

Si cur tiene una propiedad que ya estaba en acc (como token), la de cur la sobrescribe.
 */
const state$ = from( user ).pipe(
    scan<Usuario, Usuario>( (acc, cur) => {
        return { ...acc, ...cur }
    }, { edad: 33 })
);

const id$ = state$.pipe(
    map( state => state )
);

id$.subscribe( console.log );


