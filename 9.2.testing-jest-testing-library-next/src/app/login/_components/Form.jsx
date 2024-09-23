import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const isDisabled = !email || !password;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      const body = JSON.stringify({
        email,
        password,
      });
      const response = await fetch("/api/auth", {
        method: "POST",
        body,
      });
      const data = await response.json();
      if (data.isLogged) {
        setSuccess("Logged in successfully");
      } else {
        setError("Invalid credentials");
      }
    } catch (e) {
      console.error(e);
      setError("Invalid credentials");
    }
  };
  return (
    <>
      {!!success && <div>Success: {success}</div>}
      {!!error && <div>Error: {error}</div>}
      <form onSubmit={handleSubmit} data-testid={"form"}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            disabled={isDisabled}
            type="submit"
            value="Enviar"
            role="buttonFormLogin"
          />
        </div>
      </form>
    </>
  );
};

export default Form;
