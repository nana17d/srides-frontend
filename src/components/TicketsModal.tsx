import Modal from "react-ts-modal";
import Ticket from "./Ticket";

const ticketData = {
    bus: "yutong bus GR 2001-21 ",
    createdAt: "2021-06-14T09:35:05.837Z",
    from: "Jean nelson akah hall",
    seatNo: "5",
    status: "active",
    ticketId: "047358625",
    to: "Chemistry department",
    updatedAt: "2021-06-14T09:35:05.837Z",
    user: "60c717613085665af81fb0e7",
};

const TicketModal = () => {
    return (
        <Modal
            closeButton={false}
            name="tickets-modal"
            className="tickets-modal"
        >
            <Ticket data={ticketData} />
        </Modal>
    );
}
 
export default TicketModal;