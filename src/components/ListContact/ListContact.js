import "./listContact.css";
import { useContext, useEffect, useRef, useState } from "react";
import { ContactContext } from "../../context/contactContext/ContactProvider";
import Button from "react-bootstrap/Button";

export const ListContact = () => {
  const { contacts, setContacts } = useContext(ContactContext);

  function deleteContact(idDelete) {
    setContacts(contacts.filter((contact) => contact.id !== idDelete));
  }

  function deletAllContacts() {
    setContacts([]);
  }

  const renderContacts = contacts.map((contact) => (
    <div className="card-contact" key={contact.id}>
      <div className="card-contact-body">
        <img src={contact.imagenContact} alt="" />
        <h2>{contact.nameContact}</h2>
        <div className="btns-contact">
          <Button variant="primary" onClick={() => deleteContact(contact.id)}>
            Eliminar contacto
          </Button>
        </div>
      </div>
    </div>
  ));
  return contacts.length > 0 ? (
    <>
      {renderContacts}
      <div className="btn-deleteAll">
        <Button
          style={{ marginTop: "35px" }}
          variant="primary"
          onClick={deletAllContacts}
        >
          Eliminar todos mis contactos
        </Button>
      </div>
    </>
  ) : (
    <h1 style={{ textAlign: "center", marginTop: "20px", color: "blue" }}>
      No tienes contactos aun
    </h1>
  );
};
