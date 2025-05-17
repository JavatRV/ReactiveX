import { first, fromEvent, map, tap } from "rxjs";

/**
 * First(): returns the first element that
 * meets the condition, if it's specified
 */
const click$ = fromEvent<MouseEvent>( document, 'click'  );

click$.pipe(
    tap<MouseEvent>( ({ clientY }) => console.log(clientY) ),
    map( ({clientX, clientY}) => ({ clientX, clientY })),
    first( event => event.clientY >= 150 )
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
})