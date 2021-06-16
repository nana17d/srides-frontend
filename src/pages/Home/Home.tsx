import { FC } from "react";
import { MainNav } from "../../components/Navigationbar";

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <div className="home">
      <MainNav />;
    </div>
  );
};
