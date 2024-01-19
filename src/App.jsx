import { useState } from "react";
import "./App.css";
import { UserInfoForm } from "./components/user-form";

const StepOne = ({ goNext }) => {
  return (
    <>
      <UserInfoForm />
    </>
  );
}

export default App;
