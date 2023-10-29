import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import IndexPage from "./Page/IndexPage";
import ContactPage from "./Page/ContactPage";
import AboutPage from "./Page/AboutPage";
import ConsultantsPage from "./Page/ServicesPage/ConsultantsPage";
import SupportPage from "./Page/ServicesPage/SupportPage";
import BackupsolutionPage from "./Page/ServicesPage/BackupsolutionPage";
import ManageditPage from "./Page/ServicesPage/ManageditPage";
import ProcurementPage from "./Page/ServicesPage/ProcurementPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BasicInfoContext from "./store/BasicInfoContext";

function App() {
  const basicInfo = {
    officeAddress: "123, 456 one road, Sydney 2000",
    phone: "1300 123 456",
    Email: "jamiechen726@gmail.com",
  };

  const [isMobileNavOpenResult, setIsMobileNavOpenResult] = useState();

  const setIsMobileNavOpen = (value) => {
    setIsMobileNavOpenResult(value);
  };

  return (
    <BasicInfoContext.Provider value={{ ...basicInfo, isMobileNavOpenResult }}>
      <div className="App">
        <Navbar setIsMobileNavOpen={setIsMobileNavOpen} />

        <Routes>
          <Route path="/" element={<IndexPage />}></Route>
          <Route path="/index" element={<IndexPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route
            path="/services/consultants"
            element={<ConsultantsPage />}
          ></Route>
          <Route path="/services/support" element={<SupportPage />}></Route>
          <Route
            path="/services/backupsolution"
            element={<BackupsolutionPage />}
          ></Route>
          <Route path="/services/managedit" element={<ManageditPage />}></Route>
          <Route
            path="/services/procurement"
            element={<ProcurementPage />}
          ></Route>
        </Routes>

        <Footer />
      </div>
    </BasicInfoContext.Provider>
  );
}

export default App;
