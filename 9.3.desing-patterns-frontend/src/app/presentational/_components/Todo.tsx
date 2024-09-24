import { TODO_TYPE } from "../_types/todo";

type Props = TODO_TYPE & {
  onCompleted: (id: number) => void;
};

const Todo: React.FC<Props> = ({ id, completed, onCompleted, title }) => {
  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={completed}
          defaultChecked={completed}
          onChange={(e) => onCompleted(id)}
        />
        {title}
      </div>
    </div>
  );
};

export default Todo;
