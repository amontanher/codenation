import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const getBySlug = async slug => {
  const response = await fetch(`http://localhost:1338/api/threads/${slug}`);

  if (response.status === 404) {
    return '404';
  }
  return response.json();
};

export default function Slug(props) {
  const [thread, setThread] = React.useState({});
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const slug = props.match.params.slug;
    getBySlug(slug).then(r => {
      setThread(r.data);
      setShow(true);
      console.log(r.data);
    });
  }, []);

  if (!thread) {
    return <Redirect to="/404" />;
  }

  return (
    <div>
      <Link to="/" data-test="voltar">
        Voltar para Home
      </Link>

      <div>
        <h3>{thread.title}</h3>
        <p>{thread.body}</p>
        <p>Total replies: {thread.total_replies}</p>
        {show && (
          <div>
            {thread.replies.map((reply, index) => {
              return (
                <div key={index} data-test="resposta">
                  <hr />
                  <p>
                    <b>{reply.user.name}</b>
                  </p>
                  <p>
                    <i>{reply.body}</i>
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
