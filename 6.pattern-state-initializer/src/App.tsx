import FormContextProvider from "./context/FormContext";
import useForm from "./hook/useForm";
import Form from "./pages/form/Form";

function App() {
  const { contacts, handlerAddUser } = useForm();

  return (
    <>
      <FormContextProvider
        value={{
          contacts,
          handlerAddUser,
        }}
      >
        <Form />
      </FormContextProvider>
    </>
  );
}

export default App;
