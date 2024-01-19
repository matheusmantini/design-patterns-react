import axios from "axios";
import { useEffect, useState } from "react";

export const includeUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        try {
          const response = await axios.get(
            `http://localhost:9090/users/${userId}`
          );
          setUser(response.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }, []);

    return <Component {...props} user={user} />;
  };
};
