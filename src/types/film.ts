import {Rating} from './rating';

export type Film = {
  id: number;
  name: string;
  genre: string;
  year: string;
  poster: string;
  backgroundImage: string;
  director: string;
  starring: Array<string>;
  description: string;
  rating: Rating;
  videoUrl: string;
  inFavoriteList: boolean;
  runTime: string;
}


