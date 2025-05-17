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
    // Cold observale emiting cold data
    const intervalID = setInterval(
        () => subs.next( Math.random()), 1000
    )

    return () => {
        clearInterval( intervalID )
        console.log('Interval cleared')
    };
})

/**
 * subject$ subscribes to interval$, acting as a subscriber and observale to 
 * emit interval$ data
 * 
 */
const subject$ = new Subject();

/**
 * Here the subject needs to unsubcribe from interval to execute
 * the teardown logic.
 * In the line 56 - subject$.complete();
 * The subject$ is saying to all subscribers  'The stream has ended'
 * but the cold observable is still working emitting data, that´s why
 * we need to unsubscribe the subject to the cold observable with:
 * subjectSubscription.unsubscribe();
 * 
 */
const subjectSubscription = interval$.subscribe( subject$ );

// const subs1 = interval$.subscribe( rnd => console.log('subs1', rnd));
// const subs2 = interval$.subscribe( rnd => console.log('subs2', rnd));

/**
 * First tree values received are re-emitted (hot observable - the interval$ observable data)
 * the 4th value (10) emitted by the subject$ itself (cold observable)
 */
const subs1 = subject$.subscribe( observer);
const subs2 = subject$.subscribe( observer);


/**
 * We emit a new value to the subject$ subscribers, but is a different value 
 * 
 * Here we make the observable as completed after 3.5 sec
 */
setTimeout( () => {
    // Hot observable
    subject$.next(10); // Cold observable emitting cold data
    subject$.complete();
    subjectSubscription.unsubscribe();
}, 3500)