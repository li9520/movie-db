import axios from "axios"
import { MovieDTO, MoviesDTO } from "../dto"

export const getMovies = async() => {
  return (
    await axios.get<MoviesDTO>(`https://freetestapi.com/api/v1/movies`)
  )
}

export const getMovie = async(id: string) => {
  return (
    await axios.get<MovieDTO>(`https://freetestapi.com/api/v1/movies/${id}`)
  )
}