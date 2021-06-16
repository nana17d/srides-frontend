import { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { Loader } from "../components/Loader";
import { useStore } from "../hooks/useStore";
import { useUser } from "../hooks/query/useUser";
import { hasToken } from "../config/accessToken";

interface ProtectedRouteProps {
  component: any;
  path: string;
  props?: any;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  component: Component,
  path,
  props,
}) => {
  const { user, loading } = useUser();
  const { logoutLoading } = useStore();

  if (loading) return <Loader />;

  if (logoutLoading) return <Loader />;
  return hasToken() ? (
    <Route exact path={path}>
      <Component user={user} {...props} />
    </Route>
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};
