import { useState } from 'react';
import './App.css';

import { Header } from './components/Header';
import { Artists } from './components/Artists';
import { Loader } from './components/Loader';

import { Button } from './styled-components/Button';

import { startSearch } from './api/spotify';

import { artistResponse } from './types';

function App() {
  const [artists, setArtists] = useState<artistResponse[] | null>(null);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const searchMore = () => {
    if (artists) {
      console.log('trying...');
      setIsLoading(true);
      startSearch(count).then((res: [] | null) => {
        if (!res || res.length === 0) {
          searchMore();
        } else {
          setIsLoading(false);
          setArtists([...artists, ...res]);
        }
      });
    }
  };

  return (
    <div>
      <Header count={count} setArtists={setArtists} setCount={setCount} setIsLoading={setIsLoading} />

      {artists && (
        <>
          <Artists artists={artists} />
          {!isLoading && <Button onClick={searchMore}>Load {count} more</Button>}
        </>
      )}
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
