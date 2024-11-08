import { getMovie, getMovies } from "./endpoints/movies";
import { mapMovieDTOToMovie, mapMoviesDTOToMovies } from "./mappers";

export class MovieService {
  static async getMovies(){
    const { data } = await getMovies();
    return mapMoviesDTOToMovies(data);
  } 

  static async getMovie(id: string){
    const { data } = await getMovie(id);
    return mapMovieDTOToMovie(data);
  }
}