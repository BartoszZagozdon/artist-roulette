const client_id = '18d4de0e32314d02b42308e9357cbb2e'; // client id
const client_secret = 'b286a9f61c344b79b96eaee2c58c3b68'; // secret

const randomChar = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const result = characters.charAt(Math.floor(Math.random() * characters.length));
  return result;
};

const randomOffset = () => {
  return Math.floor(Math.random() * 1001);
};

export const startSearch = async (limit: number) => {
  let response = null;

  limit = limit ? limit : 1;

  await fetch('https://accounts.spotify.com/api/token', {
    // getting access token
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + btoa(client_id + ':' + client_secret),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      response = getRandomResponse(data.access_token, limit);
    })
    .catch((error) => console.error(error));

  return response;
};

const getRandomResponse = async (accessToken: string, limit: number) => {
  let res = null;

  await fetch(
    `https://api.spotify.com/v1/search?q=%25${randomChar()}%25&type=artist&limit=${limit}&offset=${randomOffset()}&access_token=` +
      accessToken
  )
    .then((response) => response.json())
    .then((response) => {
      res = response.artists.items;
    })
    .catch((error) => console.error(error));

  return res;
};
