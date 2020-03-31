import React from 'react';

export default function Hero({ hero }) {
  const img = hero.thumbnail.path + '.' + hero.thumbnail.extension;
  return (
    <div className="container">
      <div>
        <div>
          <div>
            <img src={img} alt={hero.name} />
          </div>
          <div>
            <div>
              <p>{hero.name}</p>
            </div>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
