import { createStore } from 'redux';

import reducer from '../reducers';
import state from './state';

const store = createStore(reducer, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;