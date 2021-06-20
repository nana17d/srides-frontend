import wave from "../assets/images/wave.svg";
import logo from "../assets/images/logo.svg";
import { useStore } from "../hooks/useStore";
import { getUser } from "../config/user";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";

const Ticket: React.FC<{}> = () => {
  const { ticket } = useStore();
  dayjs.extend(localizedFormat);

  const user = getUser();
  const colors: any = {
    canceled: "#FF3D00",
    active: "#20AE6B",
  };

  return (
    <div className="ticket">
      <img src={wave} alt="" className="ticket__top" />

      <div className="ticket__logo">
        <div className="ticket-id">
          <h1>#{ticket.ticketId}</h1>
        </div>
        <img src={logo} alt="S rides" />
      </div>
      <div
        className="ticket__body d-flex justify-content-center align-items-center"
        style={{ flexDirection: "column" }}
      >
        <div className="location">
          <p>From</p>
          <h1>{ticket.from}</h1>
          <p>To</p>
          <h1>{ticket.to}</h1>
        </div>
        <div className="line"></div>
        <div className="ticket-details">
          <p>Ticket details</p>
          <div className="details">
            <div className="row">
              <div className="col-6">
                <h1>Fullname</h1>
              </div>
              <div className="col-6">
                <h2>{user.fullname}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h1>Bus</h1>
              </div>
              <div className="col-6">
                <h2>{ticket.bus}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h1>SeatNo</h1>
              </div>
              <div className="col-6">
                <h2>{ticket.seatNo}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h1>Date</h1>
              </div>
              <div className="col-6">
                <h2>{dayjs(ticket.date).format("LL")}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h1>Status</h1>
              </div>
              <div className="col-6">
                <h2 style={{ color: colors[ticket.status!] }}>
                  {ticket.status}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={wave} alt="" className="ticket__bottom" />
    </div>
  );
};

export default Ticket;
