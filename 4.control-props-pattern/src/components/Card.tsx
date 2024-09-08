import ButtonCart from "./partials/ButtonCart";
import Counter from "./partials/Counter";
import Details from "./partials/Details";
import Image from "./partials/Image";
import Title from "./partials/Title";

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

interface CompoundComponentType {
  Title: () => JSX.Element;
  Image: () => JSX.Element;
  Details: () => JSX.Element;
  ButtonCart: () => JSX.Element;
  Counter: () => JSX.Element;
}

const CardComponent: React.FC<Props> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export const Card: CompoundComponentType = Object.assign(CardComponent, {
  Image,
  Details,
  Title,
  ButtonCart,
  Counter,
});

export default CardComponent;
