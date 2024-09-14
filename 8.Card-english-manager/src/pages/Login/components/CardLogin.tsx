import Button from "./partials/Button";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import Input from "./partials/InputText";

const CardLogin = () => {
  return (
    <div className="login">
      <Header />
      <div className="inputs">
        <div className="email">
          <label htmlFor="email">Email</label>
          <Input />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <Input />
        </div>
      </div>
      <div className="buttons">
        <Button />
        <Button />
      </div>
      <Footer />
    </div>
  );
};

export default CardLogin;
