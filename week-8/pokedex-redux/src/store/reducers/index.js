import { combineReducers } from 'redux';
import pokedexReducers from './pokedexReducers';

const reducers = combineReducers({
    pokemons: pokedexReducers
});

export default reducers;