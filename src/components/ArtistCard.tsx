import { styled, keyframes } from 'styled-components';

import { artist } from '../types';

const slideInFromBottom = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const CardContainer = styled.div`
  width: 80vw;
  min-height: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #8154f0;
  text-align: center;
  animation: ${slideInFromBottom} 0.5s ease-in-out forwards;
`;

const Link = styled.a`
  width: 100px;
`;

const Followers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
`;

const Genres = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100px;
  text-align: left;
`;

export const ArtistCard: React.FC<artist> = ({ url, followers, genres, img, name }) => {
  return (
    <CardContainer>
      <img width={200} height={200} src={img} />
      <Link target="_blank" href={url}>
        {name}
      </Link>
      <Followers>
        Followers <span>{followers}</span>
      </Followers>
      <Genres>
        {genres.map((genre) => (
          <li key={url + genre}>{genre}</li>
        ))}
      </Genres>
    </CardContainer>
  );
};
