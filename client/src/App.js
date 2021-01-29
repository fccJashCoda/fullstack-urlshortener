import { useState, useEffect } from 'react';
import './App.css';
import CreateShortUrl from './components/CreateShortUrl';
import ShortUrlList from './components/ShortUrlList';

function App() {
  const [urlList, setUrlList] = useState([]);

  const fetchData = () => {
    fetch('/short/showall')
      .then((response) => response.json())
      .then((data) => setUrlList(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <CreateShortUrl action={fetchData} />
      <ShortUrlList urlList={urlList} />
    </div>
  );
}

export default App;
