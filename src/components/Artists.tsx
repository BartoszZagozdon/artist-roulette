import { styled } from 'styled-components';

import { ArtistCard } from './ArtistCard';

import { artistResponse } from '../types';

const ArtistsContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

export const Artists: React.FC<{ artists: artistResponse[] }> = ({ artists }) => {
  return (
    <ArtistsContainer>
      {artists.map((artist: artistResponse, index) => (
        <ArtistCard
          key={index}
          name={artist.name}
          url={artist.external_urls.spotify}
          followers={artist.followers.total}
          img={
            artist.images[0]
              ? artist.images[0].url
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png'
          }
          genres={artist.genres}
        />
      ))}
    </ArtistsContainer>
  );
};
