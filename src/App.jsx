import "./App.css";
import { UncontrolledFlow } from "./components/uncontrolled-flow";

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
      <button onClick={() => goNext({ age: 23 })}>Next</button>
    </>
  );
};

const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Step #3: Enter your Country</h1>
      <button onClick={() => goNext({ country: "MyCountry" })}>Next</button>
    </>
  );
};

function App() {
  return (
    <>
      <UncontrolledFlow
        onDone={(data) => {
          console.log(data);
          alert("Yaeem you made it to the final step!");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </>
  );
}

export default App;
