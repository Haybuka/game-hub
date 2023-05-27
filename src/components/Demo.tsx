import React, { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

const Demo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleAlert = () => {
    setIsOpen((previous) => !previous);
  };
  return (
    <div>
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
};

export default Demo;
