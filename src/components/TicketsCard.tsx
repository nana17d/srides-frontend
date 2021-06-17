import { FC } from "react";
import FadeIn from "react-fade-in";

interface TicketsCardProps {
  children: JSX.Element;
}

export const TicketsCard: FC<TicketsCardProps> = ({ children }) => {
  return (
    <FadeIn>
      <div className='t-card'>
        <div className="head">
        <h1>Tickets</h1>
      </div>
      <div className="body">{children}</div>
      </div>

    </FadeIn>
  );
};
