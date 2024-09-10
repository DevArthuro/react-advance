import FormContextProvider from "./context/FormContext";
import Form from "./pages/form/Form";

function App() {
  return (
    <>
      <FormContextProvider value={{}}>
        <Form />
      </FormContextProvider>
    </>
  );
}

export default App;
