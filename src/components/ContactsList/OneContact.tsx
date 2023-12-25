import React from "react";
import { Contact } from "../../types";
import { useDispatch } from "react-redux";
import { selectContact } from "./ContactsSlice";

const OneContact:React.FC<Contact> = ({name, phone, email, photo}) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(selectContact({name, phone, email, photo}));
  }

  return (
    <div className="card border border-primary mx-auto p-3 mt-3 d-flex flex-row align-items-center" style={{height:'150px'}} onClick={onClick}>
      <img src={photo} alt="" style={{width: '100px'}} />
      <h3 className="ms-3 fs-1 fw-bold">{name}</h3>
    </div>
  );
};

export default OneContact;
