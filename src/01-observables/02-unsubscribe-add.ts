import { elementAt, Observable, Observer } from "rxjs";
import { EmitFlags } from "typescript";

/*
Here we define the observer structure, the signature of an Oserver has 3 elements:
    next: what are we gonna do with the received data
    error: what happens when an error ocurrs
    complete: action executed when the observable is completed
*/
const observer: Observer<any> = {
    next:   value => console.log('next:', value ),
    error:  error => console.warn('error:', error),
    complete:  () => console.info('completed')
}

//This is an observable that emits a number every second
const interval$ = new Observable<number>( subscriber => {

    /*
    This block of code is executed on subcription: interval$.subscribe()
    */
    //#region valueEmit
    let count = 0;
    const interval = setInterval( () => {
        count++
        subscriber.next(count)
        console.log(count)
    }, 1000)

    /* 
    Complete() stops the emision of values, even if there are 
    more elements to emit
    */
    setTimeout( () => {
        subscriber.complete()
    }, 2500)

    //#endregion valueEmit

    /*
    We return a function that is not being executed, just returned
    to rxJS to be exuted when any (unsubscribe, completed, error) are executed.
    This prevents the memory leak by 
    */
    return () => {
        clearInterval(interval);
        console.log('Intérvalo destruido')
    }
})

/**
 * Then we have 3 subscribtions to the observable, receiving the number
 * every second
 * Here we use the predefined structure of observer ( observer )
 */

const subs1 = interval$.subscribe( observer ) 
const subs2 = interval$.subscribe( observer )
const subs3 = interval$.subscribe( observer )

/**
 *  The add functions we can chain different suscription to
 *  perform an unsubscribe calling the first elementAt
 *  subs1.add( subs2 ).add( subs3 );
 */

/**
 * After 3 second we unsubscribe of each of the subs 
 */
setTimeout( () => {
    subs1.unsubscribe()
    subs2.unsubscribe()
    subs3.unsubscribe()
}, 3000)


