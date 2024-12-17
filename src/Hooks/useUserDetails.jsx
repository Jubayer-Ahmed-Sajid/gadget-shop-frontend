import { useEffect, useState } from "react";
import UseAuth from "./UseAuth";
import axios from "axios";

const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const { user, loading } = UseAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        if (user?.email) {
          const res = await axios.get(`http://localhost:5000/user/${user.email}`);
          setUserDetails(res.data);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setIsFetching(false);
      }
    };

    if (!loading && user) {
      fetchData();
    }
  }, [user, loading]);

  return { userDetails, isFetching };
};

export default useUserDetails;
