import { FC } from "react";
import { Movie } from "../entities/movie";

interface AppProps {
  movies: Movie[];
}
export const App: FC<AppProps> = ({ movies }) => {

  return (
    <>
      <h1>Movies:</h1>
      {movies.map(({ title }) => <div>{title}</div>)}
    </>
  )
};