import { useState, useEffect } from 'react';
import './App.css';
import CreateShortUrl from './components/CreateShortUrl';
import ShortUrlList from './components/ShortUrlList';

function App() {
  const [urlList, setUrlList] = useState([]);

  const postData = (input) => {
    const payload = { url: input };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch('http://localhost:5000/api/short/new', options)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then(() => fetchData())
      .catch((err) => console.log(err));
  };

  const fetchData = () => {
    fetch('/api/short/showall')
      .then((response) => response.json())
      .then((data) => setUrlList(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <CreateShortUrl action={postData} />
      <ShortUrlList urlList={urlList} />
    </div>
  );
}

export default App;
