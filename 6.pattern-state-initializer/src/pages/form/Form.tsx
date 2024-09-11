import { useContext, useRef, useState } from "react";
import FormCompounedComponent, {
  FormCompouned,
} from "./components/FormCompouned";
import { FormContext } from "../../context/FormContext";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const { handlerAddUser } = useContext(FormContext);
  const [showModal, setShowModal] = useState(false);

  const handlerModal = () => {
    setShowModal(!showModal);
  };

  const name = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);

  const resetModalForm = () => {
    if (name.current && phone.current) {
      name.current.value = "";
      phone.current.value = "";
      handlerModal();
    }
  };

  return (
    <>
      <div className="form-contacts">
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
        <span className="title ">
          <i className="logo fa-solid fa-x fa-xl" onClick={handlerModal} />
          User Register
        </span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (name.current && phone.current && handlerAddUser) {
              const nameUser = name.current.value;
              const phoneUser = phone.current.value;

              if (nameUser.length === 0 && phoneUser.length === 0) {
                alert("Not provide the user");
                return;
              }

              const user = {
                id: uuidv4(),
                name: nameUser,
                phone: phoneUser,
              };

              handlerAddUser(user);
              resetModalForm();
            }
          }}
        >
          <input type="text" ref={name} id="name" placeholder="Name contact" />

          <input
            type="number"
            id="phone"
            ref={phone}
            placeholder="Phone contact"
          />
          <input type="submit" value="Create" />
        </form>
      </div>
    </>
  );
};

export default Form;
