import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

// Tipos
interface State {
  count: number;
}

interface Action {
  type: 'increment' | 'decrement' | 'reset';
  payload?: number;
}

// Estado inicial
const initialState: State = { count: 0 };

// Subject que actúa como dispatcher de acciones
const action$ = new Subject<Action>();

// Reducer como en Redux
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + (action.payload ?? 1) };
    case 'decrement':
      return { count: state.count - (action.payload ?? 1) };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};

/**
 * Stream del estado global  
 */
const state$ = action$.pipe(
    // The first parameter of the scan
    // is a function that receives two parámeters
    // but should return the current value
  scan(reducer, initialState)
);

/**
 * State subscription
 * we are going to log the values when is emitted
 */
state$.subscribe(state => console.log('State:', state));

// Dispatch de acciones
action$.next({ type: 'increment' });      // { count: 1 }
action$.next({ type: 'increment', payload: 5 }); // { count: 6 }
action$.next({ type: 'decrement' });      // { count: 5 }
action$.next({ type: 'reset' });          // { count: 0 }
