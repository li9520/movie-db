import { getMovies } from "./endpoints/movies";
import { mapMoviesDTOToMovies } from "./mappers";

export class MovieService {
  static async getMovies(){
    const { data } = await getMovies();
    return mapMoviesDTOToMovies(data);
  } 
}