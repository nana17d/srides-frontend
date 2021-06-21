import { FC, useState } from "react";
import { MainNav } from "../../components/Navigationbar";
import FadeIn from "react-fade-in";
import { NavModal } from "../../components/NavModal";
import busStop from "../../assets/images/undraw_Bus_stop_re_h8ej(1).svg";
import { Footer } from "../../components/Footer";
import { TicketGeneratingForm } from "./TicketGeneratingForm";

interface HomeProps {
  businessData: any;
}

export const Home: FC<HomeProps> = ({ businessData }) => {
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
          <FadeIn>
            <div className="body container">
              <div className="header-title">
                <h1>Online Bus Ticket Generator</h1>
              </div>
              <TicketGeneratingForm />
              <div className="about-section row">
                <div className="col-12 abt-text">
                  <h1>
                    Do you want to go to a place on campus without hustling for
                    ticket? Relax, your bus-stop is just a click away.
                  </h1>
                  <p>
                    Srides, an online bus-ticket generating platform, is the
                    solution to all your commuting problems- be it long journeys
                    or short trails.{" "}
                  </p>
                </div>
                <div className="col-12 abt-img">
                  <img src={busStop} alt="Bus Stop" />
                </div>
              </div>
              <div className="milestone-section">
                <div className="header-title">
                  <h1 className="text-center">Our Milestones</h1>
                  <div className="row">
                    <div className="col-12 col-md-4"></div>
                    <div className="col-12 col-md-4"></div>
                    <div className="col-12 col-md-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          <Footer />
        </>
      )}
    </div>
  );
};
