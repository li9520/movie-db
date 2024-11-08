import axios from "axios"
import { MovieDTO, MoviesDTO } from "../dto"

export const getMovies = async() => {
  return (
    await axios.get<MoviesDTO>(`https://www.omdbapi.com/?apikey=2e1e970c&page=1&type=movie&s=true`)
  )
}

export const getMovie = async(id: string) => {
  return (
    await axios.get<MovieDTO>(`https://www.omdbapi.com/?apikey=2e1e970c&i=${id}`)
  )
}