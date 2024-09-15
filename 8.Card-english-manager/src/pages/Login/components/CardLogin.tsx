import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

const CardLogin = () => {
  return (
    <div className="form">
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="form-login"
      >
        <div className="inputs">
          <Input
            title="Email"
            className="email"
            id="email"
            attributes={{ type: "email" }}
          />
          <Input
            className="password"
            id="password"
            title="Password"
            attributes={{ type: "password" }}
          />
        </div>
        <div className="buttons">
          <Button
            title="Login"
            attributes={{ type: "submit", className: "button-login" }}
          />
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default CardLogin;
