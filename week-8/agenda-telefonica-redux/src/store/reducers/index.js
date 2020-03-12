import { combineReducers } from 'redux';
import contatoReducers from './contatoReducers';

const reducers = combineReducers({
    contatos: contatoReducers
})

export default reducers;