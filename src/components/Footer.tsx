import { FC } from "react";
import logo from "../assets/images/logo.svg";

export const Footer: FC<{}> = () => {
  return (
    <footer>
      <div className="container ">
        <div className="row">
          <div className="col-6">
            <img className="logo" src={logo} alt="S" />
            <span>rides</span>
          </div>
          <div className="col-6 copyright">
            <h1>Copyright © 2020</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};
