import React from 'react';
import axios from 'axios';

function About() {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    axios.get('https://api.github.com/users/octocat')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>About page</h1>
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>{data.bio}</p>
        </div>
      )}
    </div>
  );
}

export default About;