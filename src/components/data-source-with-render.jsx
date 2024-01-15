import { useEffect, useState } from "react";

export const DataSrouceWithRender = ({ getData = () => {}, render }) => {
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

  return render(resource);
};
