import { FC, useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import navToggleBtn from "../assets/images/heroicons_md-menu-alt-3.svg";
import { NavProfile } from "./NavProfile";
import { getUser } from "../config/user";

export const AuthNav: FC<{}> = () => {
  return (
    <div className="navMenu hide-nav  fixed-top bg-white ">
      <div className="container">
        <nav className="navbar navbar-light navbar-expand-lg my-1 my-md-4">
          <Link className="navbar-brand" to="/">
            <FadeIn>
              <h2>
                <img className="nav-logo" src={logo} alt="S" />{" "}
                <span>rides</span>
              </h2>
            </FadeIn>
          </Link>
        </nav>
      </div>
    </div>
  );
};
interface NavigationbarProps {
  openFullScreenModal?: () => void;
}
export const MainNav: FC<NavigationbarProps> = ({ openFullScreenModal }) => {
  const [isScrolling, setIsScrolling] = useState<boolean>();
  const user = getUser();
  useEffect(() => {
    const navScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", navScroll);
    return () => {
      window.removeEventListener("scroll", navScroll);
    };
  });
  return (
    <div className={`navMenu ${isScrolling ? "isScrolling" : ""} fixed-top`}>
      <div className="container">
        <FadeIn>
          <nav className="navbar navbar-light navbar-expand-lg my-3">
            <Link className="navbar-brand main-nav-brand" to="/">
              <h2>
                <img className="nav-logo" src={logo} alt="S" />{" "}
                <span>rides</span>
              </h2>
            </Link>
            <button
              // onClick={openFullScreenModal}
              className="navToggler d-lg-none"
            >
              <img src={navToggleBtn} alt="toggle" />
            </button>
            <div className="collapse navbar-collapse" id="navbar">
              <div className="nav-links-container">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="navLink mt-1 mx-4" to="about">
                      Home
                    </Link>
                    <span
                      style={{ fontSize: "8px" }}
                      className="material-icons mt-2"
                    >
                      fiber_manual_record
                    </span>
                  </li>

                  <li className="nav-item">
                    <Link className="navLink mt-1 mx-4" to="payments">
                      My Tickets
                    </Link>
                    <span
                      style={{ fontSize: "8px" }}
                      className="material-icons mt-2"
                    >
                      fiber_manual_record
                    </span>
                  </li>
                </ul>
              </div>
              <ul className="navbar-nav ml-auto">
                {!user && (
                  <li className="nav-item">
                    <Link className="navLink mt-1" to="/login">
                      Log in
                    </Link>
                  </li>
                )}
                {!user && (
                  <li className="nav-item">
                    <Link
                      to="/register"
                      className="primary-btn my-3 my-sm-0 ml-lg-3"
                    >
                      Get Started
                    </Link>
                  </li>
                )}
                {user && <NavProfile />}
              </ul>
            </div>
          </nav>
        </FadeIn>
      </div>
    </div>
  );
};
