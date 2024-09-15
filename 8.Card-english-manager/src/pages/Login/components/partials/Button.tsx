import { ButtonHTMLAttributes } from "react";

interface Props {
  title: string;
  attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({ title, attributes }) => {
  return <button {...attributes}>{title}</button>;
};

export default Button;
