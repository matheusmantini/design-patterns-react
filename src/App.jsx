import "./App.css";
import { logProps } from "./components/log-props";
import { UserInfo } from "./components/user-info";

const UserInfoWrapper = logProps(UserInfo);

function App() {
  return (
    <>
      <UserInfoWrapper test={"test"} b={"I'am a B"} c={"I'm a C"} />
    </>
  );
}

export default App;
