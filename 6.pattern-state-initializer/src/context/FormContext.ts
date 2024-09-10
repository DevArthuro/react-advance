import { createContext } from "react";
import { ContextValues } from "../models";

export const FormContext = createContext<ContextValues>({
  contacts: [],
});

export default FormContext.Provider;
