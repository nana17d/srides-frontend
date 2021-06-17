import { FC, useState } from "react";
import FadeIn from "react-fade-in";
import { Footer } from "../../components/Footer";
import { MainNav } from "../../components/Navigationbar";
import { NavModal } from "../../components/NavModal";

interface MyTicketsProps {}

const MyTickets: FC<MyTicketsProps> = () => {
  const [showFullScreenModal, setShowFullScreenModal] =
    useState<boolean>(false);
  const openFullScreenModal = (): void => {
    setShowFullScreenModal(true);
  };
  const closeFullScreenModal = (): void => {
    setShowFullScreenModal(false);
  };

  return (
    <div className="tickets">
      {showFullScreenModal ? (
        <FadeIn>
          {" "}
          <NavModal closeNavModal={closeFullScreenModal} />
        </FadeIn>
      ) : (
        <>
          <MainNav openFullScreenModal={openFullScreenModal} />
          <div className="body"></div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default MyTickets;
