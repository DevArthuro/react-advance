interface Props {
  openModal: () => void;
}

const ButtonAddUser: React.FC<Props> = ({ openModal }) => {
  return (
    <div className="button">
      <button onClick={openModal}>Agregar</button>
    </div>
  );
};

export default ButtonAddUser;
