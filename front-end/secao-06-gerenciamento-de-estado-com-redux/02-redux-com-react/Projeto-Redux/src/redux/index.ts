// ./src/redux/index.ts
import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore } from 'redux';

type ActionType = {
    type: string;
  };

const INITIAL_STATE = { count: 0 };

const reducer = (state = INITIAL_STATE, action: ActionType) => state;

const store = createStore(reducer, composeWithDevTools());

export default store;
