import { FC } from "react";
import emptyBox from "../assets/images/emptybox.svg";

export const EmptyOrders: FC<{}> = () => {
  return (
    <div className="empty-orders">
      <div className="body-info">
        <div>
          <img src={emptyBox} alt="" />
        </div>
        <h1>No Tickets</h1>
        <p>Generate a ticket to see it here</p>
      </div>
    </div>
  );
};
