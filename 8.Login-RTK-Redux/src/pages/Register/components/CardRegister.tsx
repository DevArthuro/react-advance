import { useRef, useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import {
  LOGIN_RETURN_ERROR,
  useRegisterMutation,
} from "../../../store/api/auth";

const CardRegister = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const rePassword = useRef<HTMLInputElement>(null);
  const [registerAPI, { isLoading, isError, isSuccess, error }] =
    useRegisterMutation();
  const [passwordError, setPasswordError] = useState("Not provided password");

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!email.current?.value || !password.current?.value) return;
    try {
      const body = {
        email: email.current.value,
        password: password.current.value,
      };
      const response = await registerAPI(body);
      e.currentTarget.reset();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const validatePassword = (): undefined => {
    console.log("Entra");
    if (!password.current?.value || !rePassword.current?.value) {
      setPasswordError("Passwords must be filled");
      return;
    }
    if (password.current.value !== rePassword.current.value) {
      setPasswordError("Passwords do not match");
      return;
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}$/;
    const validate = regex.test(password.current?.value);
    setPasswordError(
      !validate
        ? "The password must to have A-Z a-z 1-9 and 6 characters minium"
        : ""
    );
    return;
  };

  return (
    <div className="form-register">
      <Header />
      <div className="container">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            register(e);
          }}
        >
          {isSuccess && <p>The user is saved success</p>}
          {isError && (
            <>
              {(error as LOGIN_RETURN_ERROR).data.errors.map((error) => (
                <p>* {error}</p>
              ))}
            </>
          )}
          <div className="inputs">
            <Input
              className="email"
              attributes={{
                type: "email",
                ref: email,
              }}
              id="email"
              title="Email"
            />
            {!!passwordError && <p> {passwordError}</p>}
            <Input
              className="password"
              attributes={{
                type: "password",
                ref: password,
                onChange: () => {
                  console.log("Here2");
                  validatePassword();
                },
              }}
              id="password"
              title="Password"
            />
            <Input
              className="password-retry"
              attributes={{
                type: "password",
                ref: rePassword,
                onChange: () => {
                  console.log("Here1");
                  validatePassword();
                },
              }}
              id="password-retry"
              title="Password retry"
            />
          </div>
          <Button
            title="Register"
            attributes={{
              type: "submit",
              disabled: isLoading || !!passwordError,
            }}
          />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CardRegister;
