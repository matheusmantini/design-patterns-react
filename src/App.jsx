import axios from "axios";
import "./App.css";
import { DataSrouce } from "./components/data-source";
import { UserInfo } from "./components/user-info";

function App() {
  const getDataFromServer = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

  return (
    <>
      <DataSrouce
        getData={() => getDataFromServer("http://localhost:9090/users/3")}
        resourceName={"user"}
      >
        <UserInfo />
      </DataSrouce>
      {/* <UserLoader userId={1}>
        <UserInfo />
      </UserLoader> */}
    </>
  );
}

export default App;
