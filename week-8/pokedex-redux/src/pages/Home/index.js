import React from 'react';
import Pokemon from '../../components/Pokemon';
import { useSelector } from 'react-redux';
import '../../../src/App.css';

export default function Home() {
    const { pokemons } = useSelector(({ pokemons }) => pokemons);

    return (
        <div className="app">
            <h1>PokeDex</h1>
            <div className="pokedex-container">
                {pokemons.pokemon.map((pokemon, index) => {
                    return <Pokemon key={index}
                        url={pokemon.img}
                        name={pokemon.name}
                        type={pokemon.type}
                        id={index}
                    />
                })}
            </div>
        </div>
    );
}
