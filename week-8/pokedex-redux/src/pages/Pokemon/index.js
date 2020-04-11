import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Pokemon({ match }) {
    const { pokemons } = useSelector(({ pokemons }) => pokemons);
    const pokemonId = match.params.id;
    const pokemon = pokemons.pokemon[pokemonId];

    console.log(pokemon);

    return (
        <div>
            <p>{pokemon.name}</p>
            <Link to="/">Voltar</Link>
        </div>
    )
}