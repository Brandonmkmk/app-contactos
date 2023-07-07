import { createContext, useState } from "react";

export const ContactContext = createContext();

export const ContactContextProvider = ({ children }) => {
  const [imagenContact, setImagenContact] = useState("");
  const [nameContact, setNameContact] = useState("");
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ContactContext.Provider
      value={{
        imagenContact,
        setImagenContact,
        nameContact,
        setNameContact,
        contacts,
        setContacts,
        selectedContact,
        setSelectedContact,
        isEditing,
        setIsEditing,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
