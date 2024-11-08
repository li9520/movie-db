import { Movie } from "../entities/movie";
import { MovieDTO, MoviesDTO } from "./dto";

export function mapMovieDTOToMovie(dto: MovieDTO): Movie {
  return ({
    id: dto.imdbID,
    title: dto.Title,
    year: dto.Year,
    poster: dto.Poster,
    rating: dto.imdbRating,
    genre: [dto.Genre],
    country: dto.Country,
    plot: dto.Plot,
  })
  
}

export function mapMoviesDTOToMovies(dto: MoviesDTO): Movie[] {
  return dto.Search.map((dto) => ({
    id: dto.imdbID,
    title: dto.Title,
    year: dto.Year,
    poster: dto.Poster,
    rating: 10,
    genre: [""],
    country: "",
    plot: "",
  }));
}