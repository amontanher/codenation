import React from 'react';
import { Link } from 'react-router-dom';

export default function Thread({ thread }) {
  return (
    <div data-test="thread">
      <p>{thread.title}</p>
      <p>{thread.body}</p>
      <Link to="/">Continue lendo</Link>
    </div>
  );
}
