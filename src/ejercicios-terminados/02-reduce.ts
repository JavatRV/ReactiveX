import { from, reduce } from 'rxjs';

/**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() =>{

    const sumArray = (acumulator, actualValue) => {
        if (isNaN(actualValue)) return acumulator;
        return acumulator + actualValue;
    }

  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  from(datos).pipe(
    // Trabajar aquí

    // Use reduce directly
    // we could have used the operator filter<any>( val => (isNAN( val )))
    // before the reduce instead of the if
    // reduce( (acumulator: number, actualValue: any) => {
    //     if (isNaN(actualValue)) return acumulator;
    //     return acumulator + actualValue;
    // })

    // Use reduce calling a function
     reduce( sumArray )
  ).subscribe( console.log ) // La salida debe de ser 32

})();

        