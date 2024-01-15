import { useState } from "react";
import "./App.css";
import { ControlledModal } from "./components/controlled-modal";

function App() {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  return (
    <>
      <h1>Start Here!</h1>
      <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quis iste molestiae soluta distinctio obcaecati minima accusamus laudantium voluptatibus qui quae magni ipsa, saepe aut dicta suscipit blanditiis beatae itaque?</p>
      </ControlledModal>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? "Hide Modal" : "Display Modal"}
      </button>
    </>
  );
}

export default App;
