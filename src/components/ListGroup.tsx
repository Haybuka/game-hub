import React, { Fragment, MouseEvent } from "react";

const ListGroup = () => {
  const items = ["New York", "London", "Paris"];
  const handleClick = (event: MouseEvent, id: number) => {
    alert(id);
    
  };
  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 ? (
        <p>No item found</p>
      ) : (
        <ul className="list-group px-2">
          {items.map((item, id) => (
            <li
              className="list-group-item"
              key={id}
              onClick={(event) => handleClick(event, id)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default ListGroup;
