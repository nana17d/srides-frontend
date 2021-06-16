import { FC, useState } from "react";
import { MainNav } from "../../components/Navigationbar";
import FadeIn from "react-fade-in";
import { NavModal } from "../../components/NavModal";

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const [showFullScreenModal, setShowFullScreenModal] =
    useState<boolean>(false);
  const openFullScreenModal = (): void => {
    setShowFullScreenModal(true);
  };
  const closeFullScreenModal = (): void => {
    setShowFullScreenModal(false);
  };
  return (
    <div className="home">
      {showFullScreenModal ? (
        <FadeIn>
          {" "}
          <NavModal closeNavModal={closeFullScreenModal} />
        </FadeIn>
      ) : (
        <>
          <MainNav openFullScreenModal={openFullScreenModal} />
          <div className="body container">
            <div className="header-title">
              <h1>Online Bus Ticket Generator</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
