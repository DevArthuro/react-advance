interface Props {
  className: string;
  children: React.ReactNode;
  title: string;
  id: string;
  type?: string;
}

const Input: React.FC<Props> = ({ type, id, children, title }) => {
  return (
    <>
      <input type={type || "text"} name={title} id={id} />
      {children}
    </>
  );
};

export default Input;
