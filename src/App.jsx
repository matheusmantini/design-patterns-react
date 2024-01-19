import "./App.css";
import { GreenSmallButton, RedButton } from "./components/composition";

function App() {
  return (
    <>
      <RedButton text={"I'm red!"} />
      <GreenSmallButton text={"I'm a small green button!"} />
    </>
  );
}

export default App;
