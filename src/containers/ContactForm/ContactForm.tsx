import { Button, Form } from "react-bootstrap";
import ButtonSpinner from "../../components/Preloader/ButtonSpinner";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import {
  clearNewContact,
  newContact,
} from "../../components/ContactsList/ContactsSlice";
import React from "react";
import {
  createNewContact,
  fetchContacts,
} from "../../components/ContactsList/ContactsThunks";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const tasksIsLoading = useSelector(
    (state: RootState) => state.contacts.isLoading
  );
  const photoPreview = useSelector(
    (state: RootState) => state.contacts.newContact.photo
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(newContact({ [name]: value }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await dispatch(createNewContact());
      await dispatch(fetchContacts());
      dispatch(clearNewContact());
      navigate("/");
    } catch (error) {
      console.log("Error!", error);
    }
  };

  return (
    <Form className="w-50 mx-auto" onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="number"
          name="phone"
          placeholder="Enter phone number"
          required
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          placeholder="Enter email"
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Photo</Form.Label>
        <Form.Control
          type="text"
          name="photo"
          placeholder="Enter photo URL"
          onChange={onChange}
        />
      </Form.Group>
      <div>
        <p>Photo preview:</p>
        <img
          src={
            photoPreview
              ? photoPreview
              : "https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif"
          }
          alt=""
          style={{ width: "250px", height: "250px" }}
        />
      </div>
      <Button type="submit" variant="primary" className="mt-3">
        {tasksIsLoading ? <ButtonSpinner /> : "Add contact"}
      </Button>
    </Form>
  );
};

export default ContactForm;
