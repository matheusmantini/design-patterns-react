import { useEffect, useState } from "react";

export const useDataSource = (getData) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getData();
        setResource(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [getData]);

  return resource;
};
