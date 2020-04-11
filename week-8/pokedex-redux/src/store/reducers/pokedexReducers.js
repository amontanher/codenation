import pokedex from '../../data/pokedex.json';

const initialState = {
    pokemons: pokedex
};

export default function pokedexReducer(state = initialState, action) {
    const { type } = action;
    switch (type) {
        default:
            return state;
    }
}