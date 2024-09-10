import { createContext } from "react";
import { Form } from "../models";

const FormContext = createContext<Form | {}>({});

export default FormContext.Provider;
