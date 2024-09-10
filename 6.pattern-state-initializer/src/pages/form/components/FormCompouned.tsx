import { useContext } from "react";
import ContainerContacts from "./partials/ContainerContacts";
import Title from "./partials/Title";
import { FormContext } from "../../../context/FormContext";
import { User } from "../../../models";
import ButtonAddUser from "./partials/ButtonAddUser";

interface PropsChild {
  title?: string;
  contacts: User[];
}

interface Props {
  title: string;
  children: (props: PropsChild) => JSX.Element;
}

const FormCompounedComponent: React.FC<Props> = ({ title, children }) => {
  const { contacts } = useContext(FormContext);

  return (
    <>
      {children({
        title,
        contacts,
      })}
    </>
  );
};

export const FormCompouned = Object.assign(FormCompounedComponent, {
  Title,
  ContainerContacts,
  ButtonAddUser,
});

export default FormCompounedComponent;
