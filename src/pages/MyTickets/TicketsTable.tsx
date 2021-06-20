import dayjs from "dayjs";
import { FC } from "react";
import localizedFormat from "dayjs/plugin/localizedFormat";

interface TicketsTableProps {
  data: any;
}

export const TicketsTable: FC<TicketsTableProps> = ({ data }) => {
  dayjs.extend(localizedFormat);
  const colors: any = {
    active: "#20AE6B",
    canceled: "#FF3D00",
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
            <th scope="col">SEATNO</th>
            <th scope="col">STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((ticket: any) => {
            return (
              <tr key={ticket.ticketId}>
                <td>#{ticket.ticketId}</td>
                <td>{dayjs(ticket.date).format("LL")}</td>
                <td>{ticket.from}</td>
                <td>{ticket.to}</td>
                <td>{ticket.seatNo}</td>
                <td
                  style={{
                    color: colors[ticket.status],
                    fontSize: "12px",
                  }}
                >
                  {ticket.status}
                </td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
