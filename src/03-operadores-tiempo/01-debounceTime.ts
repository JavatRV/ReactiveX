import { debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs";


const click$ = fromEvent(document, 'click');

click$.pipe(
    debounceTime(1000),
).subscribe( console.log );


/**
 * Example 2
 * click$ stream – waits 1 second of silence after each click
 * before emitting, so rapid clicks produce only the last event.
 * input$ stream – after the user stops typing for 1 second, 
 * it emits the input’s value, and distinctUntilChanged 
 * ensures the value is different from the previous one.
 */
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup').pipe(
    debounceTime(1000),
    map(({ target }) => (target as HTMLInputElement).value),
    distinctUntilChanged(),
);

input$.subscribe( console.log );