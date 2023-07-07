import { Route, Routes } from "react-router-dom";
import { ADDCONTACT, HOME } from "./path";
import { Home } from "../../pages/Home/Home";
import { AddContact } from "../../pages/Contactos/AddContact";
import { ContactContextProvider } from "../../context/contactContext/ContactProvider";

function App() {
  return (
    <ContactContextProvider>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={ADDCONTACT} element={<AddContact />} />
      </Routes>
    </ContactContextProvider>
  );
}

export default App;
