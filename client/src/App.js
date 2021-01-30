import { useState, useEffect } from 'react';
import './App.css';
import CreateShortUrl from './components/CreateShortUrl';
import ShortUrlList from './components/ShortUrlList';
import shortApi from './api/shortApi';

function App() {
  const [urlList, setUrlList] = useState([]);

  const sendPayload = (input) => {
    const payload = { url: input };
    shortApi.postData(payload).then((data) => setUrlList(data));
    console.log('meco');
  };

  useEffect(() => {
    shortApi.getData().then((data) => setUrlList(data));
    console.log(shortApi.getDataSync());
  }, []);

  return (
    <div className="App">
      <CreateShortUrl action={sendPayload} />
      <ShortUrlList urlList={urlList} />
    </div>
  );
}

export default App;
