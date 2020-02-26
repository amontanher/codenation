import React from 'react';

export default function Card({ imageURL, title }) {
  return (
    <div className="card__wrapper column is-one-quarter">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={imageURL} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
          <a>@bulmaio</a>.<a href="#">#css</a> <a href="#">#responsive</a>
          <br />
        </div>
      </div>
    </div>
  );
}
