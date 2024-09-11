import { User } from "../../../../models";
import Contact from "./Contact";

interface Props {
  contacts: User[];
}

const ContainerContacts: React.FC<Props> = ({ contacts }) => {
  return (
    <div className="container-contacts">
      {contacts.length > 0 ? (
        contacts.map((user) => <Contact user={user} key={user.id} />)
      ) : (
        <div>There aren't contacts</div>
      )}
    </div>
  );
};

export default ContainerContacts;
