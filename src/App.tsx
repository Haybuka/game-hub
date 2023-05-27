import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  //for Objects
  const [drink, setDrink] = useState({ title: "Americano", price: 5 });
  const [customer, setCustomer] = useState({
    name: "Johnero",
    price: 5,
    address: { city: "Francisco", zipCode: 1 },
  });

  //for Arrays
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  // Updating Objects
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

  //Updating Arrays
  const handleBugFix = (id:number) => {
    console.log(id)
    let bugFix = bugs.map(bug => bug.id === id ? {...bug,fixed:!bug.fixed} : bug)
    console.log(bugFix)
    setBugs(previous => bugFix)
  };
  return (
    <div className="App">
      <p onClick={handleDrinkIncrease}>
        <span>{drink.title}</span>
        <span>{drink.price}</span>
      </p>
      <section>
        {bugs.map((bug) => (
          <p key={bug.id} className="border py-2">
            <span>{bug.id}</span>
            <span className=" mx-4 inline-block">{bug.title}</span>
            <span>{bug.fixed ? 'fixed' : 'not fixed'}</span>
            <button onClick={() => handleBugFix(bug.id)}>fix</button>
          </p>
        ))}
      </section>
    </div>
  );
}

export default App;
