import type { RouteObject } from "react-router-dom";
import { MainLayout } from "@/components";
import { PATH } from "@/routes/path";

import * as pages from "@/pages";

export const remoteRoutes: RouteObject = {
  path: "/",
  element: <MainLayout />,
  children: [{ path: PATH.HOME, element: <pages.HomePage /> }],
};
