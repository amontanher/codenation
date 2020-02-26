import React from 'react';
import Hero from './Hero';

export default function Heroes({ heroes }) {
  const style = {};

  return (
    <section>
      <div style={style}>
        {heroes.map(hero => {
          return <Hero key={hero.id} hero={hero} />;
        })}
      </div>
    </section>
  );
}
