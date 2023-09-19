import Elysia from "elysia";
import { getMovieByID } from "../movies/movie";
import { movieID } from "./models";

export const movie = (app: Elysia) =>
  app.group("/movie", (app) =>
    app.get(
      "/",
      async ({ query }) => {
        const movie = getMovieByID(Number(query.id));
        return movie;
      },
      {
        query: movieID,
      },
    ),
  );
