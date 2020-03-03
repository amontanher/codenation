import React from 'react';
import Thread from '../Thread/Thread';
import data from '../../data/data.json';

export default function Home() {
  const [threads, setThreads] = React.useState([{}]);

  async function getThreads() {
    let response = await fetch('http://localhost:1338/api/threads');
    let ret = await response.json();
    setThreads(ret.data);
  }

  React.useEffect(() => {
    // getThreads();
    setThreads(data.data);
    console.log(data.data[0]);
  }, []);

  return (
    <section>
      {threads.map((item, index) => {
        return <Thread thread={item} key={index} />;
      })}
    </section>
  );
}
