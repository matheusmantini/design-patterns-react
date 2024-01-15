import React, { useEffect, useState } from "react";

export const DataSrouce = ({ children, getData = () => {}, resourceName }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getData();
        setResource(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [getData]);

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
