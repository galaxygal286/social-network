import HomePage from "./pages/HomePage.tsx"
import LoginPage from "./pages/LoginPage.tsx"

import {
    createBrowserRouter,
  } from "react-router";

const router = createBrowserRouter([
    {
      path: "/hello",
      Component: HomePage,
    },
    {
      path: "/login",
      Component: LoginPage,
    },
  ]);
  export default router