import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import slugExample from '../../data/slugExample';

export default function Slug(props) {
  const [slug, setSlug] = React.useState({});
  const { param } = useParams();

  async function getSlug() {
    let response = await fetch(`http://localhost:1338/api/threads/${param}`);
    let ret = await response.json();
    setSlug(ret.data);
  }

  React.useEffect(() => {
    setSlug(slugExample.data);
    // getSlug();
  }, []);

  return (
    <div data-test="resposta">
      <h3>{slug.title}</h3>
      <p>{slug.body}</p>

      <Link to="/" data-test="voltar">
        Voltar para Home
      </Link>
    </div>
  );
}
