import { useEffect, useState } from "react";

export const ControlledForm = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(1);

  useEffect(() => {
    if (name.length < 3) {
      setError("Name must have at less 3 characterers");
    } else {
      setError("");
    }
  }, [name]);

  return (
    <form>
      {error && <p>{error}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
};
