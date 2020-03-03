import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import slugExample from '../../data/slugExample';

export default function Slug(props) {
  const [slug, setSlug] = React.useState({});
  const [user, setUser] = React.useState({});
  const { param } = useParams();

  async function getSlug() {
    let response = await fetch(`http://localhost:1338/api/threads/${param}`);
    let ret = await response.json();
    setSlug(ret.data);
  }

  React.useEffect(() => {
    setSlug(slugExample.data);
    setUser(slugExample.data.user);
    // getSlug();
  }, []);

  return (
    <div data-test="resposta">
      <h3>{slug.title}</h3>
      <p>{slug.body}</p>
      <div>
        <div>
          <p>{user.name}</p>
          <p>{user.created_at}</p>
        </div>
        <p>Total replies {slug.total_replies}</p>
      </div>
      <Link to="/" data-test="voltar">
        Voltar para Home
      </Link>
    </div>
  );
}
