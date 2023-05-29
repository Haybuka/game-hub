import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import produce from "immer";
import "bootstrap/dist/css/bootstrap.css";
import Expandable from "./components/demo/Expandable";
function    Basics() {
  //for Objects
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
    topping: ["mushroom"],
  });
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
  const handleTopping = () => {
    setDrink({
      ...drink,
      topping: [...drink.topping, "cheese"],
    });
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

  //Updating Arrays
  const handleBugFix = (id: number) => {
    console.log(id);
    let bugFix = bugs.map((bug) =>
      bug.id === id ? { ...bug, fixed: !bug.fixed } : bug
    );
    console.log(bugFix);
    setBugs((previous) => bugFix);
  };
  return (
    <>
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
              <span>{bug.fixed ? "fixed" : "not fixed"}</span>
              <button onClick={() => handleBugFix(bug.id)}>fix</button>
            </p>
          ))}
        </section>
      </div>
      <Expandable max={100}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur molestias nesciunt vero, sapiente unde deserunt? Commodi illo dignissimos veniam distinctio labore nesciunt dolorum mollitia ducimus? Officiis laborum eaque totam praesentium.
      </Expandable>
    </>
  );
}

export default Basics;
