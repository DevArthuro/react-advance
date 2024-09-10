import { useState } from "react";
import FormCompounedComponent, {
  FormCompouned,
} from "./components/FormCompouned";

const Form = () => {
  const [showModal, setShowModal] = useState(false);

  const handlerModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="form">
        <FormCompounedComponent title="Titulo random">
          {({ title, contacts }) => (
            <>
              <FormCompouned.Title title={title} />
              <FormCompouned.ContainerContacts contacts={contacts} />
              <FormCompouned.ButtonAddUser openModal={handlerModal} />
            </>
          )}
        </FormCompounedComponent>
      </div>
      <div className={`${showModal ? "show-modal" : ""} modal-add-user`}>
        Modal Add User
      </div>
    </>
  );
};

export default Form;
