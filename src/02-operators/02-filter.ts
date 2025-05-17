import { filter, fromEvent, map } from "rxjs";

console.log('listening...');

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(key => key === 'Enter')
  );
  
  keyup$.subscribe(console.log);