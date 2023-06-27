import { styled } from 'styled-components';

import { ArtistCard } from './ArtistCard';

import { artistResponse } from '../types';
import { useEffect, useState } from 'react';

const ArtistsContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

export const Artists: React.FC<{ artists: artistResponse[] }> = ({ artists }) => {
  // const [displayedArtists, setDisplayedArtists] = useState<artistResponse[]>([]);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   if (currentIndex < artists.length) {
  //     const timer = setTimeout(() => {
  //       setDisplayedArtists((prevArtists) => [...prevArtists, artists[currentIndex]]);
  //       setCurrentIndex((prevIndex) => prevIndex + 1);
  //     }, 50);
  //     return () => clearTimeout(timer);
  //   }
  // }, [currentIndex, artists]);

  // useEffect(() => {
  //   setDisplayedArtists([]);
  //   setCurrentIndex(0);
  // }, [artists]);

  return (
    <ArtistsContainer>
      {artists.map((artist: artistResponse) => (
        <ArtistCard
          key={artist.external_urls.spotify}
          name={artist.name}
          url={artist.external_urls.spotify}
          followers={artist.followers.total}
          img={
            artist.images[0].url
              ? artist.images[0].url
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png'
          }
          genres={artist.genres}
        />
      ))}
    </ArtistsContainer>
  );
};
