"use client";
import Image from "next/image";
import ImageForm from "../assets/image.png";

const FormLogin = () => {
  return (
    <>
      <form
        onClick={(e) => {
          e.preventDefault();
        }}
        className="form"
        data-testid="form"
      >
        <div className="form__image">
          <Image src={ImageForm} className="form__image-img" alt="logo image" />
        </div>
        <div className="form__inputs">
          <input
            type="text"
            className="form__inputs-username"
            placeholder="username"
          />
          <input
            type="password"
            className="form__inputs-password"
            placeholder="password"
          />
        </div>
        <div className="form__button">
          <button>Login</button>
        </div>
        <div className="form__links">
          <a href="#" className="form__links-forgot">
            Forgot my password
          </a>
          <a href="#" className="form__links-create">
            Create account
          </a>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
