import axios from "axios";
import { useEffect, useState } from "react";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:9090/current-user");
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return user;
};
