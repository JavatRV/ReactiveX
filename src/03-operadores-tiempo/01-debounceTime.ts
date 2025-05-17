import { debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs";


const click$ = fromEvent(document, 'click');

click$.pipe(
    debounceTime(1000),
).subscribe( console.log );


/**
 * Example 2
 */
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup').pipe(
    debounceTime(1000),
    map(({ target }) => (target as HTMLInputElement).value),
    distinctUntilChanged(),
);

input$.subscribe( console.log );