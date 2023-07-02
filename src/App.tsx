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

  return (
    <div>
      <Header setArtists={setArtists} setCount={setCount} setIsLoading={setIsLoading} />

      {artists && (
        <>
          <Artists artists={artists} />
          <Button
            onClick={() => {
              setIsLoading(true);
              startSearch(count).then((res) => {
                if (res) {
                  setIsLoading(false);
                  setArtists([...artists, ...res]);
                }
              });
            }}
          >
            Load {count} more
          </Button>
        </>
      )}
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
