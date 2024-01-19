import "./App.css";
import { RedButton } from "./components/composition";
import { SmallRedButton } from "./components/partial";
import { UserInfoForm } from "./components/user-form";

const StepOne = ({ goNext }) => {
  return (
    <>
      <UserInfoForm />
      <RedButton text={"I'm red!"} />
      <SmallRedButton text={"I'm a small red button!"} />
    </>
  );
}

export default App;
