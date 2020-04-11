import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';

export default function Pokemon({ match }) {
    const { pokemons } = useSelector(({ pokemons }) => pokemons);
    const pokemonId = match.params.id;
    const pokemon = pokemons.pokemon[pokemonId];

    const handleEvolutionJoin = arr => {
        return (
            <Route>
                {arr.map((pokemon, index) => (
                    <Link to={`/pokemon/${Number(pokemon.num - 1)}`} key={index}>{pokemon.name}</Link>
                ))}
            </Route>
        )
    };

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <div className="detail-container">
                <div className="detail-left">
                    <img src={pokemon.img} alt={pokemon.name} />
                </div>
                <div className="detail-right">
                    <ul>
                        <li>Type: <span>{pokemon.type.join(" | ")}</span></li>
                        <li>Weaknesses: <span>{pokemon.weaknesses.join(" | ")}</span></li>
                        <li>Previous Evolution: <span>{pokemon.prev_evolution ? handleEvolutionJoin(pokemon.prev_evolution) : '---'}</span></li>
                        <li>Next Evolution: <span>{pokemon.next_evolution ? handleEvolutionJoin(pokemon.next_evolution) : '---'}</span></li>
                    </ul>
                </div>
                <Link to="/">
                    <FontAwesomeIcon size="lg" color="#787879" icon={faArrowLeft} />
                </Link>
            </div>
        </div>
    )
}