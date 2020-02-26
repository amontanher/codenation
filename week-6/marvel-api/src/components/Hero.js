import React from 'react';

export default function Hero({ hero }) {
  const img = hero.thumbnail.path + '.' + hero.thumbnail.extension;
  return (
    <div className="container">
      <div className="card__wrapper column is-one-quarter">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={img} alt={hero.name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media-content">
              <p className="title is-4">{hero.name}</p>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
