import { interval, map, take } from 'rxjs';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() =>{

  /**
   * usign take first
   * ➡ Efficient: only 8 emissions are processed and mapped.
   * 
   * using take after map:
   * Inefficient: map() processes every value emitted by interval, 
   * even those after the 8th one, but they get discarded. 
   * (In practice, you won't notice here because take(8) unsubscribes, 
   * but it's still less ideal.)
   */

    const inicio = 7;
    const countdown$ = interval(700).pipe(
      take(8),
      map( val => inicio - val)
    );
    

    // No tocar esta línea ==================
    countdown$.subscribe( console.log ); // =
    // ======================================


})();

		