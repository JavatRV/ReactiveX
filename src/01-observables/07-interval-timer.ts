import { interval, timer } from "rxjs"



const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
}

/**
 * Interval is async by default
 * emits values after certain time to 
 * the rest of the times
 */
const interval$ = interval(1000);

/**
 * Timer emits values between a time interval
 * then it is completed
 */
//const timer$    = timer(2000);
const timer$    = timer(2000, 1000);

// We can get certain time and its seconds 
/**
 * We can get certain time and its seconds
 * const hoyEn5 = new Date();
 * hoyEn5.setSeconds( hoyEn5.getSeconds() + 5);
 * then time timer will emit values after this time
 */
//const timer$    = timer(0);

console.log('Start')
//interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('End')


