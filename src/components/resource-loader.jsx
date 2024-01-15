import axios from "axios";
import React, { useEffect, useState } from "react";

export const ResourceLoader = ({ children, resourceUrl, resourceName }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(resourceUrl);
        setResource(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }

        return child;
      })}
    </>
  );
};
