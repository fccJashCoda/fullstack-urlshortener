import './App.css';
import CreateShortUrl from './components/CreateShortUrl';
import ShortUrlList from './components/ShortUrlList';

function App() {
  return (
    <div className="App">
      <CreateShortUrl />
      <ShortUrlList />
    </div>
  );
}

export default App;
