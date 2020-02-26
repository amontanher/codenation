import React from 'react';
import Hero from './Hero';

export default function Heroes({ heroes }) {
  return (
    <section className="section">
      <div className="container">
        {heroes.map(hero => {
          return <Hero key={hero.id} hero={hero} />;
        })}
      </div>
    </section>
  );
}
