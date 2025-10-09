import React from "react";

function Fruit({ name, price }) {
  return (
    // <ul>
    //   <li>The price of {name} is  {price}</li>
    // </ul>
    <l1>
      {price > 100 ? (
        <h3> more than hundread fruit = {name}</h3>
      ) : (
        <h3> less than hundread fruit = {name}</h3>
      )}
    </l1>
  );
}

export default Fruit;
