import axios from "axios";
import React, { useEffect, useState } from "react";

export const UserLoader = ({ children, userId }) => {
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
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }

        return child;
      })}
    </>
  );
};
