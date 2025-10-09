import React from "react";
function AnimalMap() {
  let animals = ["cat", "dog", "elephant"];

  return (
    <div>
      <ol>
        {animals.map((animal) => (
          <li>{animal}</li>
        ))}
      </ol>
    </div>
  );
}
export default AnimalMap;
