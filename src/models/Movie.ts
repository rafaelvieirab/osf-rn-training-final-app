interface Trailer {
  url: string;
}

export interface Movie {
  id: string;
  title: string;
  contentRating: string;
  synopsis: string;
  posterPortraitUrl: string | null;
  posterHorizontalUrl: string | null;
  trailers: Trailer[];
}
