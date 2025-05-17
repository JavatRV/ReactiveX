import { asyncScheduler, of, range } from "rxjs";



/**
 * range (start:  0, count?: number, scheduler?: SchedulerLike): Observable<number>
 */
//const src$ = of(1,2,3,4,5);
//const src$ = range(1,5); // Sync
const src$ = range(1,5, asyncScheduler); // Async

console.log('start')
src$.subscribe( console.log )
console.log('start')

