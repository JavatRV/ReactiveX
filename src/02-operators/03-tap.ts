import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';


/**
 * RxJS is used to perform side effects 
 * in an observable 
 * chain without changing 
 * the emitted values.
 */
const numeros$ = range(1,5);


numeros$.pipe(
    tap( x => {
        console.log('antes', x);
        return 100;
    }),
    map( val => val * 10 ),
    tap({
        next: valor => console.log('después', valor),
        complete: () => console.log('Se terminó todo')
    })
)
.subscribe( val => console.log('subs', val ));






