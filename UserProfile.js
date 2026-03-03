import placeholder from "./images/placeholder.jpg";
function UserProfile({ name, email, image }) {
  return (
    <div className="profile-card">
      <h2>User Profile</h2>
      <img src={placeholder} alt={`${name}'s profile`} className="photo" />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <a href={`mailto:${email}`}>Send Email</a>
    </div>
  );
}

export default UserProfile;
