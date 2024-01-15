import { useState } from "react";
import "./App.css";
import { ControlledFlow } from "./components/controlled-flow";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1: Enter your name</h1>
      <button onClick={() => goNext({ name: "MyName" })}>Next</button>
    </>
  );
};

const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button onClick={() => goNext({ age: 27 })}>Next</button>
    </>
  );
};

const StepThree = () => {
  return (
    <>
      <h1>Step #3: Congratulations! You are available to receive the gift card!</h1>
      <button onClick={() => goNext({})}>Next</button>
    </>
  );
};

const StepFour = ({ goNext }) => {
  return (
    <>
      <h1>Step #4: Enter your Country</h1>
      <button onClick={() => goNext({ country: "MyCountry" })}>Next</button>
    </>
  );
};

function App() {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex(currentStepIndex + 1);
  };

  return (
    <>
      <ControlledFlow onNext={goNext} currentIndex={currentStepIndex}>
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow>
    </>
  );
}

export default App;
