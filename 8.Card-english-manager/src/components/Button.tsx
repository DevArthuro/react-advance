import { ButtonHTMLAttributes } from "react";
import "../sass/button.scss";

interface Props {
  title: string;
  attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({ title, attributes }) => {
  return (
    <button className="global-button" {...attributes}>
      {title}
    </button>
  );
};

export default Button;
