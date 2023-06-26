import { useState } from 'react';
import './App.css';

import { Header } from './components/Header';
import { Artists } from './components/Artists';

function App() {
  const [artists, setArtists] = useState<[] | null>(null);

  console.log(artists);

  return (
    <div>
      <Header setArtists={setArtists} />
      {artists && <Artists artists={artists} />}
    </div>
  );
}

export default App;
