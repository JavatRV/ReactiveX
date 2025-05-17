

import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';


const url = 'https://httpbin.org/delayyy/1';

const handleError = ( resp: AjaxError ) => {
    console.error('Error:', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
}

const obs$ = ajax.getJSON( url ).pipe(
    catchError( handleError )
);

const obs2$ = ajax( url ).pipe(
    catchError( handleError )
);

obs$.subscribe( data => console.log('getJson', data) );
obs2$.subscribe( data => console.log('getJson', data) );


