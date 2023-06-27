import React, { FormEvent } from 'react';
import { styled } from 'styled-components';

import { startSearch } from '../api/spotify';

import { headerParams } from '../types';

const HeaderContainer = styled.div`
  width: 80vw;
  height: 20%;
  background-color: #3bedb7;
  margin-top: 25px;
  border-radius: 20px 20px;
`;

const CountInput = styled.input`
  font-size: 2rem;
  width: 80px;
  background-color: #f4f9fd;
  color: black;

  text-align: center;
`;

export const Header: React.FC<headerParams> = ({ setArtists, setCount, setIsLoading }) => {
  const blockInvalidChar = (e: FormEvent<HTMLInputElement>) => {
    const keyboardEvent = e as React.KeyboardEvent<HTMLInputElement>;
    const key = keyboardEvent.key;
    const invalidChars = ['e', 'E', '+', '-', '.'];

    if (invalidChars.includes(key)) {
      e.preventDefault();
    }
  };

  const controlValue = (e: FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);

    console.log(value);

    if (value > 50) {
      e.currentTarget.value = '50';
    } else if (value < 1) {
      e.currentTarget.value = '1';
    }

    setCount(value);
  };

  const searchArtists = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!e.currentTarget.count.value) {
      alert('field cannot be empty');
    } else {
      setIsLoading(true);
      startSearch(e.currentTarget.count.value).then((res) => {
        setIsLoading(false);
        setArtists(res);
      });
    }
  };

  return (
    <HeaderContainer>
      <h1>Artist Roulette!</h1>
      <p>Select how many artists to display randomly and click the button!</p>
      <form
        onSubmit={(e) => searchArtists(e)}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}
      >
        <CountInput
          type="number"
          name="count"
          min={1}
          max={50}
          defaultValue={1}
          onChange={controlValue}
          onKeyDown={blockInvalidChar}
        />
        <button type="submit">Search new artists</button>
      </form>
    </HeaderContainer>
  );
};
