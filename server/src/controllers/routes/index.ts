import Elysia from "elysia";
import { movie } from "./movie";

export const routes = (app: Elysia) =>
  app.group("/api", (app) => app.use(movie));
