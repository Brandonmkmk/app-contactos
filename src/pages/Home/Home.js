import { Navegacion } from "../../components/navegacion/Navegacion";
import { ContactContextProvider } from "../../context/contactContext/ContactProvider";
import { ListContact } from "../../components/ListContact/ListContact";
import { AddContact } from "../Contactos/AddContact";

export const Home = () => {
  return (
    <>
      <Navegacion />

      {/*este componente puede hacer uso del contexto ContactContext, ya que el componente Home si esta en vuelto en su Provider, y todos los componentes que esten dentro de Home igual pueden hacer uso de ello*/}
      <ListContact />
    </>
  );
};
