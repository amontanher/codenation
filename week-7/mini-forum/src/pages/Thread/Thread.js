import React from 'react';
import { Link } from 'react-router-dom';

export default function Thread({ thread }) {
  return (
    <div data-test="thread">
      <hr />
      <h3>{thread.title}</h3>
      <p>{thread.body}</p>
      <Link to={`/thread/${thread.slug}`} data-test="link">
        Continue lendo
      </Link>
    </div>
  );
}
