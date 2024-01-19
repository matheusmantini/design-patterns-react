import "./App.css";
import { RedButton } from "./components/composition";
import { SmallRedButton } from "./components/partial";

function App() {
  return (
    <>
      <RedButton text={"I'm red!"} />
      <SmallRedButton text={"I'm a small red button!"} />
    </>
  );
}

export default App;
