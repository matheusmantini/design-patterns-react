import axios from "axios";
import { useEffect, useState } from "react";

export const includeUpdatableUser = (Component, userId) => {
  return (props) => {
    const [initialUser, setInitialUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        try {
          const response = await axios.get(
            `http://localhost:9090/users/${userId}`
          );
          setInitialUser(response.data);
          setUser(response.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }, []);

    const onChange = (updates) => {
      setUser({ ...user, ...updates });
    };

    const onPostUser = async () => {
      try {
        const response = await axios.post(
          `http://localhost:9090/users/${userId}`,
          { user }
        );
        setInitialUser(response.data);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const onResetUser = () => {
      setUser(initialUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChange}
        onPostUser={onPostUser}
        onResetUser={onResetUser}
      />
    );
  };
};
