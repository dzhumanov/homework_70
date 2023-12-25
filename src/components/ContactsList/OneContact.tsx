import React from "react";
import { Contact } from "../../types";

const OneContact:React.FC<Contact> = ({name, phone, email, photo}) => {
  return (
    <div className="card border border-primary w-50 mx-auto p-3 mt-3">
      <img src={photo} alt="" />
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>
      <div className="btn-wrapper d-flex justify-content-between align-items-center">
      </div>
    </div>
  );
};

export default OneContact;
