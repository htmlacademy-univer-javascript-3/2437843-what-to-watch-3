import {Film} from '../types/film';

export const MOCK_FILMS: Array<Film> = [
  {
    id: 1,
    name: 'The Grand Budapest Hotel',
    poster: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    genre: 'Drama',
    year: '2014',
    director: 'Wes Anderson',
    starring: ['Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum'],
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: {
      score: 8.9,
      count: 240
    },
    videoUrl: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    inFavoriteList: true,
    runTime: '1h 36m',
  },
  {
    id: 2,
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    poster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    genre: 'Drama',
    year: '2014',
    director: 'Wes Anderson',
    starring: ['Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum'],
    runTime: '1h 36m',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      count: 100 + Math.floor(Math.random() * 100)
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    inFavoriteList: false,
  },
  {
    id: 3,
    name: 'Bohemian Rhapsody',
    poster: 'img/bohemian-rhapsody.jpg',
    backgroundImage: 'img/bohemian-rhapsody.jpg',
    genre: 'Drama',
    year: '2014',
    director: 'Wes Anderson',
    starring: ['Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum'],
    runTime: '1h 36m',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      count: 100 + Math.floor(Math.random() * 100)
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    inFavoriteList: false,
  },
  {
    id: 4,
    name: 'Macbeth',
    poster: 'img/macbeth.jpg',
    backgroundImage: 'img/macbeth.jpg',
    genre: 'Comedy',
    year: '2014',
    director: 'Wes Anderson',
    starring: ['Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum'],
    runTime: '1h 36m',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      count: 100 + Math.floor(Math.random() * 100)
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    inFavoriteList: false,
  },
  {
    id: 5,
    name: 'Aviator',
    poster: 'img/aviator.jpg',
    backgroundImage: 'img/aviator.jpg',
    genre: 'Drama',
    year: '2014',
    director: 'Wes Anderson',
    starring: ['Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum'],
    runTime: '1h 36m',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      count: 100 + Math.floor(Math.random() * 100)
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    inFavoriteList: false,
  },
  {
    id: 6,
    name: 'We need to talk about Kevin',
    poster: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundImage: 'img/we-need-to-talk-about-kevin.jpg',
    genre: 'Drama',
    year: '2014',
    director: 'Wes Anderson',
    starring: ['Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum'],
    runTime: '1h 36m',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      count: 100 + Math.floor(Math.random() * 100)
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    inFavoriteList: false,
  },
  {
    id: 7,
    name: 'What We Do in the Shadows',
    poster: 'img/what-we-do-in-the-shadows.jpg',
    backgroundImage: 'img/what-we-do-in-the-shadows.jpg',
    genre: 'Hohma',
    year: '2014',
    director: 'Wes Anderson',
    starring: ['Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum'],
    runTime: '1h 36m',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      count: 100 + Math.floor(Math.random() * 100)
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    inFavoriteList: false,
  },
  {
    id: 8,
    name: 'Revenant',
    poster: 'img/revenant.jpg',
    backgroundImage: 'img/revenant.jpg',
    genre: 'Drama',
    year: '2014',
    director: 'Wes Anderson',
    starring: ['Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum'],
    runTime: '1h 36m',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      count: 100 + Math.floor(Math.random() * 100)
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    inFavoriteList: false,
  },
  {
    id: 9,
    name: 'Revenant',
    poster: 'img/revenant.jpg',
    backgroundImage: 'img/revenant.jpg',
    genre: 'Drama',
    year: '2014',
    director: 'Wes Anderson',
    starring: ['Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum'],
    runTime: '1h 36m',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      count: 100 + Math.floor(Math.random() * 100)
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    inFavoriteList: false,
  },
  {
    id: 10,
    name: 'Revenant',
    poster: 'img/revenant.jpg',
    backgroundImage: 'img/revenant.jpg',
    genre: 'Drama',
    year: '2014',
    director: 'Wes Anderson',
    starring: ['Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum'],
    runTime: '1h 36m',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      count: 100 + Math.floor(Math.random() * 100)
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    inFavoriteList: false,
  },
  {
    id: 11,
    name: 'Revenant',
    poster: 'img/revenant.jpg',
    backgroundImage: 'img/revenant.jpg',
    genre: 'Drama',
    year: '2014',
    director: 'Wes Anderson',
    starring: ['Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum'],
    runTime: '1h 36m',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      count: 100 + Math.floor(Math.random() * 100)
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    inFavoriteList: false,
  },
];

