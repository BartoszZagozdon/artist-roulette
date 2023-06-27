import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top-color: #888;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;

export const Loader = () => (
  <LoaderContainer>
    <Spinner />
  </LoaderContainer>
);
