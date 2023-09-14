import React from "react";

const BasicInfoContext = React.createContext({
  officeAddress: "",
  phone: "",
  Email: "",
  isMobileNavOpenResult: false,
});

export default BasicInfoContext;
