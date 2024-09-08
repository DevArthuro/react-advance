interface Props {
  number: number;
}

const DrawStarts: React.FC<Props> = ({ number }) => {
  // Redondear el número al entero más cercano
  const decimal = Math.round(number);
  // Crear un array con la cantidad de estrellas
  const starts = Array(decimal).fill("★");

  return (
    <div>
      {starts.map((start, index) => (
        <span key={index} className="start-only">
          {start}
        </span>
      ))}
    </div>
  );
};

export default DrawStarts;
