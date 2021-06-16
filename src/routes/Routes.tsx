import { FC, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Loader } from "../components/Loader";
// import { ProtectedRoute } from "./ProtectedRoute";

const Login = lazy(() => import("../pages/Login/Login"));
const NotFound = lazy(() => import("../pages/NotFound/Notfound"));
const Register = lazy(() => import("../pages/Register/Register"));

export const Routes: FC = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};
