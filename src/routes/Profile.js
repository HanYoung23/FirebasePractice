import { authService } from "fbase";
import React from "react";
import { useHistory } from "react-router-dom";

// const onLogOutClick = () => {
//   authService.signOut();
// };

const Profile = () => {
  const history = useHistory();
  return (
    <>
      <button
        onClick={() => {
          history.push("/");
          authService.signOut();
        }}
      >
        Log Out
      </button>
    </>
  );
};

export default Profile;
