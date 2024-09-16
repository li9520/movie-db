import axios from "axios"
import { MoviesDTO } from "../dto"

export const getMovies = async() => {
  return (
    await axios.get<MoviesDTO>(`https://freetestapi.com/api/v1/movies`)
  )
}