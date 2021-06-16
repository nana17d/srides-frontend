import { FC, useState } from "react";
import { getUser } from "../config/user";
import { useLogout } from "../hooks/mutation/useLogout";

interface NavProfileProps {
  className?: string;
}

export const NavProfile: FC<NavProfileProps> = ({ className }) => {
  const [active, setActive] = useState(false);
  const { mutate } = useLogout();
  const user = getUser();

  const getAvatar = (name: string) => {
    if (!name) return;

    const parts = name.split(" ");
    const avatar = parts.map((part: string) => part[0]);
    return avatar;
  };
  const name = user ? user.fullname : "";
  const showOnly = (maxText: number, input: string) =>
    input.length > maxText ? `${input.substring(0, maxText)}...` : input;

  const avatar = getAvatar(name);

  const toggleActive = () => {
    setActive(!active);
  };
  const handleLogout = async () => {
    await mutate();
  };
  return (
    <div className={`nav__profile ${className} ${active && "-active"}`}>
      <div className="profile" onClick={toggleActive}>
        <div className="profile__avatar">{avatar}</div>
        <div className="profile__name">{showOnly(25, name)}</div>
        <span className=" material-icons">expand_more</span>
      </div>
      {active && (
        <div
          onClick={handleLogout}
          className="profile__btn profile__btn--logout"
        >
          Logout
        </div>
      )}
    </div>
  );
};
