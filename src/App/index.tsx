import { FC } from "react";
import { Movie } from "../entities/movie";
import { CardList } from "../components";

interface AppProps {
  movies: Movie[];
}
export const App: FC<AppProps> = ({ movies }) => {

  return (
    <>
      <h1>Movies:</h1>
      <CardList movies={movies}/>
    </>
  )
};