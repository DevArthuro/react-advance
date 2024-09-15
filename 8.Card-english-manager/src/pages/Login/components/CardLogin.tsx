import Button from "./partials/Button";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import Input from "./partials/InputText";

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
          <div className="email">
            <Input title="Email" className="email" id="email" type="email">
              <label htmlFor="email">Email</label>
            </Input>
          </div>
          <div className="password">
            <Input
              className="password"
              id="password"
              title="Password"
              type="password"
            >
              <label htmlFor="password">Password</label>
            </Input>
          </div>
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
