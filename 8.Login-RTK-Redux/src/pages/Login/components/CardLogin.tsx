import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import { useRef } from "react";
import { LOGIN_RETURN_ERROR, useLoginMutation } from "../../../store/api/auth";
import { saveDataAuth } from "../../../store/slice/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { useNavigate } from "react-router-dom";

const CardLogin = () => {
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const loginUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const user = await login({ email, password }).unwrap();
      dispatch(saveDataAuth({ user }));
      navigate("/", { replace: true });
    } catch (e) {
      console.error(error);
    }
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
        {isError && (
          <p className="text-error">
            {"* "}
            {(error as LOGIN_RETURN_ERROR).data.errors.join("\n")}
          </p>
        )}
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
              disabled: isLoading,
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
