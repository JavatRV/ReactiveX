import { asyncScheduler, debounceTime, distinctUntilChanged, fromEvent, map, throttleTime } from "rxjs";


const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(1000),
).subscribe( console.log );


/**
 * Example 2
 */
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup').pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true,
    }),
    map(({ target }) => (target as HTMLInputElement).value),
    distinctUntilChanged(),
);

input$.subscribe( console.log );