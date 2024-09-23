const UserProfile = ({ displayName, username, email, isEmailVerified }) => {
  return (
    <div>
      <div>
        <span>
          Display name:{" "}
          {displayName.length > 30
            ? displayName.slice(0, 27).concat("...")
            : displayName}
        </span>
      </div>
      <div>
        <span>Username: {username}</span>
      </div>
      <div>
        <span>Email: {email}</span>
      </div>
      <div>
        Verified:{" "}
        <span>
          {isEmailVerified ? "Email verified" : "Email not verified yet"}
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
