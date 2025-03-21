import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function ProfilePage() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Log in</div>;

  return <div>Welcome {user.userName}</div>;
}

export default ProfilePage;
