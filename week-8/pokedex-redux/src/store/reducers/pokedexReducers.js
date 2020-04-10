const initialState = {
    pokemons: [{}]
};

export default function pokedexReducer(state = initialState, action) {
    const { type, pokemonId } = action;
    switch (type) {
        case 'ALL':
            return state;

        default:
            return state;
    }
}