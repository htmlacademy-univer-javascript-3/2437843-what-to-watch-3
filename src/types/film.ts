import {Rating} from './rating';

export type Film = {
  id: number;
  name: string;
  genre: string;
  year: string;
  poster: string;
  backgroundImage: string;
  director: string;
  starring: string;
  description: string;
  rating: Rating;
  videoUrl: string;
  inFavoriteList: boolean;
}


