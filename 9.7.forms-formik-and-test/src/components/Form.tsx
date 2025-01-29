const Form = () => {
  return (
    <>
      <form
        onClick={(e) => {
          e.preventDefault();
        }}
        className="form"
      >
        <div className="form__image">
          <img src="#" className="form__image-img" />
        </div>
        <div className="form__inputs">
          <input type="text" className="form__inputs-username" />
          <input type="password" className="form__inputs-password" />
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

export default Form;
