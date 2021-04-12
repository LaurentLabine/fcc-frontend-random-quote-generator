import { createStore } from 'redux';
import { quotesReducer } from './quoteMachine/reducer';

export const store = createStore(quotesReducer);