export type artist = {
  url: string;
  name: string;
  followers: number;
  img: string;
  genres: string[];
};

export type artistResponse = {
  external_urls: { spotify: string };
  name: string;
  followers: { total: number };
  images: { url: string }[];
  genres: string[];
};

export type headerParams = {
  setArtists: React.Dispatch<React.SetStateAction<artistResponse[] | null>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
