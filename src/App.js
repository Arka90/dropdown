import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [selection, setSelection] = useState(null);

  // For getting the value
  const handelSelect = (option) => {
    setSelection(option);
  };

  // Options to be passed on the component
  const options = [
    { label: "Yes", value: "yes" },
    { label: "Probably Not", value: "probably-not" },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Should you use Dropdown?</h1>
      <div className="flex">
        <Dropdown value={selection} onChange={handelSelect} options={options} />
      </div>
    </div>
  );
}

export default App;
