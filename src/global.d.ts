import { Movie } from "./entities/movie";

declare global {
  interface Window {
    __SERVER_DATA__: Movie[];
  }
}