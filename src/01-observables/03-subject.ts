import { Observable, Observer, Subject } from "rxjs";
/**
 * Subject: Used to emit the same value to all subscriber
 */

const observer: Observer<any> = {
    next:   value => console.log('next:', value ),
    error:  error => console.warn('error:', error),
    complete:  () => console.info('completed')
}

const interval$ = new Observable<number>( subs => {
    const intervalID = setInterval(
        () => subs.next( Math.random()), 3000
    )

    return () => clearInterval( intervalID );
})

/**
 * First we create the subject
 * then we make a subscription to interval$ passing the subject
 * as the handler of the data.
 * By doing so the subject$ will act as an observer, passing the value of
 * interval$ to the subscribers of subject$  (subs1, subs2)
 * is like a bridge, receives the data and emits the value to all the subscribers
 */
const subject$ = new Subject();
interval$.subscribe( subject$ );

// const subs1 = interval$.subscribe( rnd => console.log('subs1', rnd));
// const subs2 = interval$.subscribe( rnd => console.log('subs2', rnd));

/**
 * Here we have different subscribers to the main value (intervalo) 
 * through the subject
 */
const subs1 = subject$.subscribe( rnd => console.log('subs1', rnd));
const subs2 = subject$.subscribe( rnd => console.log('subs2', rnd));