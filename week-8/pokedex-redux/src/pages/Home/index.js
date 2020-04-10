import React, { useState, useEffect } from 'react';
import pokedex from '../../data/pokedex.json';
import '../../../src/App.css';
import Pokemon from '../../components/Pokemon';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState([{}]);

    useEffect(() => {
        //console.log(pokedex.pokemon);
        setLoading(false);
        setPokemons(pokedex.pokemon);
    }, []);

    return (
        <div className="app">
            <h1>PokeDex</h1>
            {loading && <div>Carregando...</div>}
            <div className="pokedex-container">
                {!loading && pokemons.map((pokemon, index) => {
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
