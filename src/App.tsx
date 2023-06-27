import { useState } from 'react';
import './App.css';

import { Header } from './components/Header';
import { Artists } from './components/Artists';
import { Loader } from './components/Loader';

import { startSearch } from './api/spotify';

import { artistResponse } from './types';

function App() {
  const [artists, setArtists] = useState<artistResponse[] | null>(null);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  console.log(artists);

  return (
    <div>
      <Header setArtists={setArtists} setCount={setCount} setIsLoading={setIsLoading} />

      {artists && (
        <>
          <Artists artists={artists} />
          <button
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
          </button>
        </>
      )}
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
