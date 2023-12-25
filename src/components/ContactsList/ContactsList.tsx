import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import { fetchContacts } from "./ContactsThunks";
import OneContact from "./OneContact";

const ContactsList = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {contacts ? (
        Object.keys(contacts).map((key) => (
          <OneContact
            key={key}
            name={contacts[key].name}
            phone={contacts[key].phone}
            email={contacts[key].email}
            photo={contacts[key].photo}
          />
        ))
      ) : (
        <h1 className="text-center">No contacts</h1>
      )}
    </div>
  );
};

export default ContactsList;
