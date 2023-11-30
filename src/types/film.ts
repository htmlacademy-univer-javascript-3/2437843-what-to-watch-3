export interface FilmBase {
  id: string;
  name: string;
  genre: string;
}


export interface FilmWithPreview extends FilmBase{
  previewImage: string;
  previewVideoLink: string;
}

export interface Film extends FilmBase {
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  released: number;
  isFavorite: boolean;
}

export interface FilmFull extends Film {
  backgroundColor: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  previewImage: string;
  previewVideoLink: string;
}

