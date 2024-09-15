import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import "../sass/input.scss";

interface Props {
  className: string;
  title?: string;
  id: string;
  attributes: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

const Input: React.FC<Props> = ({ attributes, id, title }) => {
  return (
    <div className="input-wrap">
      <input {...attributes} name={title} id={id} />
      {title && <label htmlFor={id}>{title}</label>}
    </div>
  );
};

export default Input;
