import React from "react";
import useUserDetails from "../../Hooks/useUserDetails";
import Loading from "../Loading/Loading";

const UserProfile = () => {
  const { userDetails, isFetching } = useUserDetails();

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center text-xl font-bold">
      {userDetails ? (
        <div>
          <h1>User Details</h1>
          <p>Name: {userDetails.lastName}</p>
          <p>Email: {userDetails.email}</p>
          <p>Role:{userDetails.role}</p>
          <p>Status:{userDetails.status}</p>
        </div>
      ) : (
        <p>No user details available</p>
      )}
    </div>
  );
};

export default UserProfile;
