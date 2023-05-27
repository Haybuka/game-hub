import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const items = ["New York", "London", "Paris"];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSelectItem = (item: string) => {
    alert(item);
  };

  const handleAlert = () => {
    setIsOpen((previous) => !previous);
  };
  return (
    <div className="App">
      {isOpen && (
        <Alert color="secondary" onClick={handleAlert}>
          This is an alert
        </Alert>
      )}
      <Button color="danger" onClick={handleAlert}>
        {isOpen ? "Close Alert" : "Open Alert"}
      </Button>
    </div>
  );
}

export default App;
