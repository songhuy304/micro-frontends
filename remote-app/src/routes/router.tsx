import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { remoteRoutes } from "./remote.routes";

const routes: RouteObject[] = [remoteRoutes];

export const router = createBrowserRouter(routes);
