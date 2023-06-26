import { styled } from 'styled-components';

const CardContainer = styled.div`
  width: 80vw;
  height: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #8154f0;
`;

export const ArtistCard = () => {
  return <CardContainer></CardContainer>;
};
