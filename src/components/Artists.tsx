import { styled } from 'styled-components';

import { ArtistCard } from './ArtistCard';

const ArtistsContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

export const Artists: React.FC<{ artists: [] }> = ({ artists }) => {
  return (
    <ArtistsContainer>
      {artists.map((artist, index) => (
        <ArtistCard key={index} />
      ))}
    </ArtistsContainer>
  );
};
