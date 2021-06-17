import { FC } from "react";
import { modal } from "react-ts-modal";
import emptyBox from "../assets/images/emptybox.svg";
import TicketModal from "./TicketsModal";

export const EmptyOrders: FC<{}> = () => {
  return (
    <div className="empty-orders">
      <div className="body-info">
        <div>
          <img src={emptyBox} alt="" />
        </div>
        <h1>No Tickets</h1>
        <p onClick={() => modal.show("tickets-modal")}>
          Generate a ticket to see it here
        </p>
        <TicketModal />
      </div>
    </div>
  );
};
