import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="form-footer">
      <p>I have an account</p>
      <Link to="/login">Go to Login</Link>
    </div>
  );
};

export default Footer;
