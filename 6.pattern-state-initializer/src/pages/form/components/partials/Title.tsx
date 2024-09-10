interface Props {
  title?: string;
}

const Title: React.FC<Props> = ({ title }) => {
  return <h1>{title ?? "Book Contact"}</h1>;
};

export default Title;
