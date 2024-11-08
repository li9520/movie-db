export type MovieDTO = {
  imdbID: string,
  Title: string,
  Year: number,
  Type: string,
  Poster: string,

  imdbRating: number,
  Genre: string,
  Country: string,
  Plot: string,
}

export type MoviesDTO = {Search: {imdbID: string,
  Title: string,
  Year: number,
  Type: string,
  Poster: string}[]};