import React from 'react';
import Hero from './Hero';

export default function Heroes({ heroes }) {

  return (
    <div className="heroes-container">
      <section className="heroes-grid">
        {heroes.map(hero => {
          return <Hero key={hero.id} hero={hero} />;
        })}
      </section>
    </div>
  );
}
