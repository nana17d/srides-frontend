import { FC } from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";

export const AuthNav: FC<{}> = () => {
  return (
    <div className="navMenu hide-nav  fixed-top bg-white ">
      <div className="container-fluid">
        <nav className="navbar navbar-light navbar-expand-lg my-1 my-md-4">
          <Link className="navbar-brand" to="/">
            <FadeIn>
              <h2>
                S<span>rides</span>
              </h2>
            </FadeIn>
          </Link>
        </nav>
      </div>
    </div>
  );
};
