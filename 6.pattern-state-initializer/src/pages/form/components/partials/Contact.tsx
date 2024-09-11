import { User } from "../../../../models";

interface Props {
  user: User;
}

const Contact: React.FC<Props> = ({ user }) => {
  return (
    <div className="contact-card">
      <div className="img-details">
        <img src="/profile.jpeg" alt="" />
        <div className="details">
          <span className="name">{user.name}</span>
          <span className="phone">{user.phone}</span>
        </div>
      </div>
      <div className="actions">
        <div className="call-phone">
          <i className="logo fa-solid fa-phone fa-xl" />
        </div>
        <div className="edit">
          <i className="logo fa-solid fa-pen-to-square fa-xl" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
