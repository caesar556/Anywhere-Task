import type { FC, JSX } from "react";
import { useAppSelector } from "./hooks";
import { Navigate } from "react-router-dom";
import type { RootState } from "../redux/store";

export function requireAuth<T extends {}>(Component: FC<T>): FC<T> {
  return function ProtectedRoute(props: T): JSX.Element {
    const isAuth = useAppSelector(
      (state: RootState) => state.auth.isAuthenticated,
    );
     console.log("isAut", isAuth);
    if (!isAuth) return <Navigate to="/" replace />;

    return <Component {...props} />;
  };
}
