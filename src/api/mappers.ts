import { Movie } from "../entities/movie";
import { MovieDTO, MoviesDTO } from "./dto";

export function mapMovieDTOToMovie(dto: MovieDTO): Movie {
  return dto as Movie;
}

export function mapMoviesDTOToMovies(dto: MoviesDTO): Movie[] {
  return dto.map(mapMovieDTOToMovie);
}