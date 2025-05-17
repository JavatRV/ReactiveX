import { distinct, distinctUntilChanged, from, of } from "rxjs";


const numeros$ = of(1,'1',1,3,3,4,5,5,6,'1')

numeros$.pipe(
    distinct() // as === comparison
).subscribe(
   // console.log
)

interface Character {
    name: string;
}


const characters: Character[] = [
    { name: 'Goku' },
    { name: 'Goku' },
    { name: 'Trunks' },
    { name: 'Gohan' },
    { name: 'Goku' },
    { name: 'Vegueta' },
    { name: 'Vegueta' },
    { name: 'Trunks' },
    { name: 'Vegueta' },
]

from( characters ).pipe(
    //distinctUntilChanged()
    distinctUntilChanged( (ant, act) => ant.name === act.name )
).subscribe(
    console.log
)


