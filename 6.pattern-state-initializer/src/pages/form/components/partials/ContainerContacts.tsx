import { User } from "../../../../models";

interface Props {
  contacts: User[];
}

const ContainerContacts: React.FC<Props> = ({ contacts }) => {
  return (
    <div>
      {contacts.length > 0 ? (
        contacts.map((user) => <div>{JSON.stringify(user)}</div>)
      ) : (
        <div>There aren't contacts</div>
      )}
    </div>
  );
};

export default ContainerContacts;
