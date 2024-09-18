import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-form">
      <Link to="/forgot-password">Forgot password?</Link>
      <p>
        Don't have an account? <Link to="/register">Register!</Link>
      </p>
    </div>
  );
};

export default Footer;
