import { catchError, of, pluck } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';


const url = 'https://api.github.com/users?per_page=5';

const errorHandler = ( response: Response ) => {
    if ( !response.ok ) {
        throw new Error( response.statusText );
    }
    return response;
}

const ajaxErrorHandleer = ( err: AjaxError ) => {
    console.error('Error:', err.message);
    return of({
        ok: false,
        users: []
    });
}

ajax(url).pipe(
    pluck('response'),
    catchError( ajaxErrorHandleer )
).subscribe( users => console.log('users:', users));
