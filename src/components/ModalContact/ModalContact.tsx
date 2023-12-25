import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { selectContact } from "../ContactsList/ContactsSlice";

const ModalContact = () => {
  const selectedContact = useSelector(
    (state: RootState) => state.contacts.modalContact
  );
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(selectContact(null));
  };

  return (
    <Modal
      show={Boolean(selectedContact)}
      onHide={onClose}
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>{selectedContact?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={selectedContact?.photo} alt="" style={{display:'block' ,maxWidth: '300px', height:'auto', margin: '0 auto'}}/>
        <p>Email: {selectedContact?.email}</p>
        <p>Phone: {selectedContact?.phone}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalContact;
