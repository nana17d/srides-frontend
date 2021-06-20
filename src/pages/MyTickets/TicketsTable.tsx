import dayjs from "dayjs";
import { FC } from "react";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { useStore } from "../../hooks/useStore";
import { modal } from "react-ts-modal";

interface TicketsTableProps {
  data: any;
}

export const TicketsTable: FC<TicketsTableProps> = ({ data }) => {
  dayjs.extend(localizedFormat);
  const { setTicket } = useStore();

  const handleClick = (ticket: any) => {
    setTicket(ticket);
    modal.show("tickets-modal");
  };
  return (
    <div>
      <table id="table">
        <thead>
          <tr style={{ height: "24px" }}>
            <th scope="col">ID</th>
            <th scope="col">DATE</th>
            <th scope="col">FROM</th>
            <th scope="col">TO</th>
            <th scope="col">BUS</th>
            <th scope="col">SEATNO</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((ticket: any) => {
            return (
              <tr onClick={() => handleClick(ticket)} key={ticket.ticketId}>
                <td>#{ticket.ticketId}</td>
                <td>{dayjs(ticket.date).format("LL")}</td>
                <td>{ticket.from}</td>
                <td>{ticket.to}</td>
                <td>{ticket.bus}</td>
                <td>{ticket.seatNo}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
