/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la 
 * función capitalizar
 */

import { from, map, of } from "rxjs";

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
(() =>{


  const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 
    'hiedra venenosa'];

  const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, 
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

    /**
     * of() needs the values to be passed as arguments,
     * e.g. of(1,2,3)
     */
  const dcOf$ = of(...nombres).pipe(
    map( (nombre) => capitalizar(nombre) )
  ).subscribe( console.log );

  /**
   * from() needs an iterable or an array as argument
   * e.g. from([1,2,3]) but also we can use a string
   * e.g. from('abc') will emit 'a', 'b', 'c' or an object
   * e.g. from({a:1, b:2}) will emit [ 'a', 1 ], [ 'b', 2 ]
   */
    const $dcFrom = from(nombres).pipe(
    map( (nombre) => capitalizar(nombre) )
  ).subscribe( console.log );


  // Cambiar este FOR OF, por un observable y capitalizar las emisiones
//   for( let nombre of nombres ) {
//     console.log( capitalizar(nombre) )
//   }







})();

