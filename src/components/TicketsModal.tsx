import { FC } from "react";
import Modal from "react-ts-modal";
interface TicketModalProps {
  children: JSX.Element;
}
const TicketModal: FC<TicketModalProps> = ({ children }) => {
  return (
    <Modal closeButton={false} name="tickets-modal" className="tickets-modal">
      {children}
    </Modal>
  );
};

export default TicketModal;
