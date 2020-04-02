import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getCharactersById } from '../../services/api';

import '../../components/styles.css';

export default function Home(props) {
    const [hero, setHero] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
        const id = props.match.params.id;
        getCharactersById(id).then(json => {
            setHero(json.data.results[0]);
            setShow(true);
            console.log(json.data.results[0])
        });
    }, [props]);

    return (
        <div>
            <Link className="back-link" to="/">Back to Home</Link>
            {show && (
                <div className="hero-id-container">
                    <div className="hero-id-image">
                        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                            alt="Hero"
                            width="200"
                            height="200">
                        </img>
                    </div>
                    <div className="hero-id-itens">
                        <h3>{hero.name}</h3>
                        <div className="comics">- Comics</div>
                        <div className="series">- Series</div>
                        <div className="stories">- Stories</div>
                        <div className="events">- Events</div>
                        <div className="ulrs">- URLs</div>
                    </div>
                </div>
            )}

        </div>
    );
}