import React from 'react';
import Card from './Card';

export default function Hero({ hero }) {
  const img = hero.thumbnail.path + '.' + hero.thumbnail.extension;
  return (
    <div className="container">
      <Card title={hero.name} imageURL={img} />
    </div>
  );
}
