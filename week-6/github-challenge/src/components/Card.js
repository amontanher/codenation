import React from 'react';
import Moment from 'react-moment';
import { faStar, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CardItem({ repository }) {
  console.log(repository);
  const handleRedirect = url => {
    window.location.href = url;
  };
  return (
    <div className="card-container">
      <div className="card-title">
        <h3>{repository.name}</h3>
        <FontAwesomeIcon
          className="fa-icon"
          icon={faExternalLinkAlt}
          color="#4573B7"
          onClick={() => handleRedirect(repository.html_url)}
        />
      </div>
      <div className="card-header">
        <img src={repository.owner.avatar_url}
          alt="User"
          width="50"
          height="50" />
        <div className="card-header-info">
          <div>{repository.name}</div>
          <div>
            <FontAwesomeIcon size="sm" color="#F6E172" icon={faStar} />{' '}
            {repository.stargazers_count}
          </div>
        </div>
      </div>
      <div className="card-body">
        {repository.description}
        <div className="card-body-lang">#{repository.language}</div>
        <div><Moment format="DD/MM/YYYY">{repository.created_at}</Moment></div>
      </div>
    </div>
  );
}
