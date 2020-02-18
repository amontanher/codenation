import React from 'react';
import Hero from './Hero'
import Title from './Title'

export default function Heroes({ heroes }) {
    return (
        <section>
            <Title title="Super Heroes" />
            <div>
                {heroes.map(hero => {
                    return <Hero key={hero.id} hero={hero}/>
                })}
            </div>
        </section>
    )
}