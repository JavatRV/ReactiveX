import { Observable, Observer } from "rxjs";

/**
 * This function is executed by rxjs when the
 * observable emits a value
 */
const observer: Observer<any> = {
    next:   value => console.log('siguiente [next]:', value ),
    error:  error => console.warn('error [obs]:', error),
    complete:  () => console.info('Completed [obs]')
}

 const obs$ = new Observable<string>( subs => {

    subs.next('Hello')
    subs.next('World!!!')

    // Force an error
    // const a = undefined;
    // a.name = 'Javier'
    // subs.complete();

 })

 /**
  * Here we are passing the observer to the observable
  * The observer is an object that has the methods
  * next, error and complete
  * Internally, the observable will call the next method
  * when it emits a value
  */
 obs$.subscribe( observer )

//  obs$.subscribe( 
//     valor => console.log('next: ', valor),
//     error => console.error('eror: ', error),
//     () => console.info('Completed')
//  );


 