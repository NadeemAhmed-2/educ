import React, { createContext, useState, useContext } from "react";

const FieldContext = createContext();

export const FieldProvider = ({ children }) => {
  const [field, setfield] = useState("Default Value");

  return (
    <FieldContext.Provider value={{ field, setfield }}>
      {children}
    </FieldContext.Provider>
  );
};

export const useField = () => useContext(FieldContext);
