import "./contacto.css";
import { Navegacion } from "../../components/navegacion/Navegacion";
import Button from "react-bootstrap/Button";
import { useContext, useRef } from "react";
import { ContactContext } from "../../context/contactContext/ContactProvider";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../config/routes/path";
import { TYPES_ALERT } from "../../utils/alerts/alertas";

export const AddContact = () => {
  const {
    imagenContact,
    setImagenContact,
    nameContact,
    setNameContact,
    contacts,
    setContacts,
  } = useContext(ContactContext);

  const imagenRef = useRef();
  const nameRef = useRef();
  const containerAlerts = useRef();
  const navigete = useNavigate();

  const selectFileContact = (event) => {
    const image = event.target.files[0];

    if (image.type.startsWith("image/")) {
      setImagenContact(URL.createObjectURL(image));
    }
  };

  const handleNameContact = (event) => {
    setNameContact(event.target.value);
  };

  const insertContact = () => {
    if (imagenRef.current.files && nameRef.current.value) {
      let newContact = {
        id: contacts.length,
        imagenContact,
        nameContact,
      };
      setContacts([...contacts, newContact]);
      containerAlerts.current.innerHTML = `<p>${TYPES_ALERT.success}</p>`;
      containerAlerts.current.style.backgroundColor = "green";
      imagenRef.current.files = null;
      nameRef.current.value = "";
    } else {
      containerAlerts.current.innerHTML = `<p>${TYPES_ALERT.error}</p>`;
      containerAlerts.current.style.backgroundColor = "red";
    }
  };

  return (
    <>
      <Navegacion />
      <h1 style={{ color: "blue", textAlign: "center", marginTop: "35px" }}>
        En esta seccion podras agregar tus contactos
      </h1>
      <div className="container-form">
        <div className="body-form">
          <input
            ref={imagenRef}
            className="input-file"
            type="file"
            onChange={selectFileContact}
          />

          <input
            ref={nameRef}
            onChange={handleNameContact}
            className="input-text"
            type="text"
            placeholder="nombre de tu contacto"
          />
          <Button
            className="btn-save"
            onClick={insertContact}
            variant="primary"
          >
            Guardar contacto
          </Button>
          <Button
            className="btn-view"
            onClick={() => navigete(HOME)}
            variant="primary"
          >
            Ver contactos
          </Button>
          <div ref={containerAlerts} className="container-alerts"></div>
        </div>
      </div>
    </>
  );
};
