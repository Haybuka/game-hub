import React, { ReactNode, useState } from "react";

interface Props {
  children: string;
  max?:number
}
const Expandable = ({ children,max=20 }: Props) => {
  console.log(children);
  const [seeAll, setSeeAll] = useState(true);
  return (
    <section>
      {seeAll ? (
        <div>
          <p>{children}</p>
          <button onClick={() => setSeeAll(previous => !previous)}> Less</button>
        </div>
      ) : (
        <div>
          <p>{children.slice(0, max)} ...</p>
          <button onClick={() => setSeeAll(previous => !previous)}>More</button>

        </div>
      )}
    </section>
  );
};

export default Expandable;
