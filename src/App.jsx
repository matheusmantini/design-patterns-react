import axios from "axios";
import "./App.css";
import { DataSrouce } from "./components/data-source";
import { DataSrouceWithRender } from "./components/data-source-with-render";
import { UserInfo } from "./components/user-info";

function App() {
  const getDataFromServer = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

  const getDataFromLocalStorage = (key) => () => {
    return localStorage.getItem(key);
  };

  const Message = ({ msg }) => {
    return <h1>{msg}</h1>;
  };

  return (
    <>
      <DataSrouceWithRender
        getData={() => getDataFromServer("http://localhost:9090/users/3")}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSrouceWithRender>

      <hr />

      <DataSrouce
        getData={() => getDataFromLocalStorage("test")}
        resourceName={"msg"}
      >
        <Message />
      </DataSrouce>
      {/* <UserLoader userId={1}>
        <UserInfo />
      </UserLoader> */}
    </>
  );
}

export default App;
