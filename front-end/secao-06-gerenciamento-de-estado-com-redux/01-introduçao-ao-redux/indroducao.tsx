import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// const store = createStore(
//   reducer,
//   composeWithDevTools(
//     applyMiddleware(...middleware),
//     // other store enhancers if any
//   ),
// );

const reducer = (state, action) => state

// Criando a nossa store:
const store = createStore(reducer);

// Criando uma função Reducer
// const reducer = (state, action) => state

// Action para incrementar o contador:
const action = {
    type: 'INCREMENT_COUNTER'
  };

  dispatch({type: 'INCREMENT_COUNTER'});

  const state = store.getState()

  store.subscribe(() => {
    console.log(`O novo estado global é ${store.getState()}`)
})

function dispatch(arg0: { type: string; }) {
    throw new Error('Function not implemented.');
}
