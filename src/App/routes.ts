import { ComponentType } from "react";
import { MovieService } from "../api";
import { CatalogPage, MoviePage } from "../pages";
import { RouteObject } from "react-router-dom";

type Routes = RouteObject & {
  path: string,
  component: ComponentType<{ serverData?: unknown }>,
  fetchInitialData?: (id?: string) => unknown;
}
const routes: Routes[] = [
  {
    path: "/",
    component: CatalogPage,
    fetchInitialData : () => MovieService.getMovies() ,   
  },
  {
    path: "movie/:id",
    component: MoviePage,
    fetchInitialData : (path = "") => MovieService.getMovie(path.split("/").pop()) ,
  },
];

export default routes;