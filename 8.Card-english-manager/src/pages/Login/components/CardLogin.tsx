import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import { useRef } from "react";
import { AppDispatch } from "../../../models";
import { LoginUser } from "../../../store/actions/auth";
import { authUserSelector } from "../../../store/selectors/auth";

const CardLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const {
    loading,
    user: { isLogged },
  } = useSelector(authUserSelector);

  const loginUser = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    dispatch(LoginUser({ user: { email, password, name: email } }));
  };

  return (
    <div className="form">
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!email.current?.value || !password.current?.value) return;
          loginUser({
            email: email.current.value,
            password: password.current.value,
          });
        }}
        className="form-login"
      >
        <div className="inputs">
          <Input
            title="Email"
            className="email"
            id="email"
            attributes={{ type: "email", ref: email }}
          />
          <Input
            className="password"
            id="password"
            title="Password"
            attributes={{ type: "password", ref: password }}
          />
        </div>
        <div className="buttons">
          <Button
            title="Login"
            attributes={{
              disabled: loading || isLogged,
              type: "submit",
              className: "button-login",
            }}
          />
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default CardLogin;
