import { distinct, from, of } from "rxjs";


const numeros$ = of(1,'1',1,3,3,4,5,5,6,'1')

numeros$.pipe(
    distinct() // as === comparison
).subscribe(
    console.log
)

interface Character {
    name: string;
}


const characters: Character[] = [
    { name: 'Goku' },
    { name: 'Vegeta' },
    { name: 'Goku' },
    { name: 'Gohan' },
    { name: 'Goku' },
]

from( characters ).pipe(
    distinct( c => c.name ) // as === comparison
).subscribe(
    console.log
)


