import { of, take, tap } from "rxjs";


const numeros$ = of(1,2,3,4,5);

numeros$.pipe(
    tap( t => console.log('tap', t)),
    take(9)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
})

