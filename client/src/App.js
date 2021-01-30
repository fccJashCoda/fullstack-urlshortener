import { useState, useEffect } from 'react';
import './App.css';
import CreateShortUrl from './components/CreateShortUrl';
import ShortUrlList from './components/ShortUrlList';

function App() {
  const [urlList, setUrlList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = () => {
    setError();
    setLoading(true);
    fetch('/api/short/showall')
      .then((response) => response.json())
      .then((data) => {
        console.log('refetch');
        setUrlList(data);
        setLoading(false);
      })
      .catch((err) => setError(true));
  };

  const postData = (input) => {
    const payload = {
      url: input,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    fetch('/api/short/new', options)
      .then(() => getData())
      .catch((err) => setError(true));
  };

  const deleteData = (id) => {
    const payload = {
      id,
    };
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    fetch('/api/short/delete', options)
      .then(() => getData())
      .catch((err) => setError(true));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <CreateShortUrl action={postData} />
      <ShortUrlList urlList={urlList} action={deleteData} />
      {loading ? <p>Loading...</p> : ''}
      {error ? <p>ERROR!</p> : ''}
    </div>
  );
}

export default App;
