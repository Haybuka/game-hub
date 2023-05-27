import React, { Fragment, MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedItem, setSelectedItem] = useState<number>();
  const handleClick = (event: MouseEvent, id: number) => {
    setSelectedItem((prev) => id);
  };
  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 ? (
        <p>No item found</p>
      ) : (
        <ul className="list-group px-2">
          {items.map((item, id) => (
            <li
              className={
                selectedItem === id
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={id}
              onClick={(event) => {
                handleClick(event, id);
                onSelectItem(item);
              }}
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
