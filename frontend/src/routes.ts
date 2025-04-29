import HomePage from "./pages/HomePage.tsx"
import LoginPage from "./pages/LoginPage.tsx"

import {
    createBrowserRouter,
  } from "react-router";
import RegisterPage from "./pages/RegisterPage.tsx";

const router = createBrowserRouter([
    {
      path: "/hello",
      Component: HomePage,
    },
    {
      path: "/login",
      Component: LoginPage,
    },
    {
      path: "/register",
      Component: RegisterPage,
    },
  ]);
  export default router