export type Album = {
  id: number;
  title: string;
  artist: string;
  albumCover: string;
  released: string;
  genre: string;
  subgenre: string;
  label: string;
  description: string;
  wikipediaUrl: string;
};

export type Rating = {
  totalRatings: number;
  averageRating: number;
};
