import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

const CardRegister = () => {
  return (
    <div className="form-register">
      <Header />
      <div className="container">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="inputs">
            <Input
              className="email"
              attributes={{ type: "email" }}
              id="email"
              title="Email"
            />
            <Input
              className="password"
              attributes={{ type: "password" }}
              id="password"
              title="Password"
            />
            <Input
              className="password-retry"
              attributes={{ type: "password" }}
              id="password-retry"
              title="Password retry"
            />
          </div>
          <Button title="Register" attributes={{ type: "submit" }} />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CardRegister;
