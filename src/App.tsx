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
  const [drink, setDrink] = useState({ title: "Americano", price: 5 });
  const [customer, setCustomer] = useState({
    name: "Johnero",
    price: 5,
    address: { city: "Francisco" , zipCode : 1},
  });
  const handleSelectItem = (item: string) => {
    alert(item);
  };

  const handleAlert = () => {
    setIsOpen((previous) => !previous);
  };
  const handleCustomerChange = () => {
    setCustomer({
      ...customer,
      address: {
        ...customer.address,
        zipCode: 988,
      },
    });
  };
  const handleDrinkIncrease = () => {
    //adding new drink
    const newDrink = {
      ...drink,
      price: drink.price + 1,
    };
    setDrink(newDrink);
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

      <p onClick={handleDrinkIncrease}>
        <span>{drink.title}</span>
        <span>{drink.price}</span>
      </p>
    </div>
  );
}

export default App;
