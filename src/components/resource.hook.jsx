import axios from "axios";
import { useEffect, useState } from "react";

export const useResource = (resourceUrl) => {
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

  return resource;
};
