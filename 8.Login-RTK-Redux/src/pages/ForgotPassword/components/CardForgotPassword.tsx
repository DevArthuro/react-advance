import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

const CardForgotPassword = () => {
  return (
    <div className="forgotpass-form">
      <Header />
      <div className="container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            className="email"
            attributes={{ type: "email" }}
            id="email"
            title="email"
          />
          <Button title="send recovery" attributes={{ type: "submit" }} />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CardForgotPassword;
