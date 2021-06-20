import wave from "../assets/images/wave.svg";

const Ticket: React.FC<{ data: Record<string, any> }> = ({ data }) => {
  return (
    <div className="ticket">
      <img src={wave} alt="" className="ticket__top" />
      <div
        className="ticket__body d-flex justify-content-center align-items-center"
        style={{ flexDirection: "column" }}
      >
        <h4>{data.ticketId}</h4>
        From: {data.from} <br />
        To: {data.to} <br />
      </div>
      <img src={wave} alt="" className="ticket__bottom" />
    </div>
  );
};

export default Ticket;
