import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero({ hero }) {
  const img = hero.thumbnail.path + '.' + hero.thumbnail.extension;
  return (
    <div className="hero-item">
      <div>
        <div>
          <div>
            <img src={img} alt={hero.name} width="200" height="200" />
          </div>
          <div>
            <div>
                <p>{hero.name}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
