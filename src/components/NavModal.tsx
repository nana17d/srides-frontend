import { FC } from "react";
import { Link } from "react-router-dom";
import closeButton from "../assets/images/close-circular-button-symbol.svg";
import { getUser } from "../config/user";
import { NavProfile } from "./NavProfile";

interface NavModalProps {
  closeNavModal: () => void;
}

export const NavModal: FC<NavModalProps> = ({ closeNavModal }) => {
  const user = getUser();
  return (
    <div className="nav-modal">
      <div className="nav-open">
        <div className="top">
          <button onClick={closeNavModal}>
            <img src={closeButton} alt="" />
          </button>
        </div>
        <div className="links">
          <ul>
            <li onClick={closeNavModal}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={closeNavModal}>
              <Link to="/me/tickets">My Tickets</Link>
            </li>
            {!user && (
              <>
                <li onClick={closeNavModal}>
                  <Link to="/login">Login</Link>
                </li>
                <li onClick={closeNavModal}>
                  <Link to="/register">Sign Up</Link>
                </li>
              </>
            )}
            {user && (
              <div className="modal-profile">
                <NavProfile />
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
