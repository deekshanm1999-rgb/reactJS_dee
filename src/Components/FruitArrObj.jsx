import React from 'react';
import Fruit from './Fruit';

function Fruits() {
  let fruits = [
    { name: "apple", price: 100 },
    { name: "orange", price: 80 },
    { name: "mango", price: 150 },
    { name: "pineapple", price: 250 },

  ];
//   return (
    // <div>
    //   {fruits.map((fruit) => (
    //     <li key ={fruit .name} >{fruit.name}- {fruit.price}</li>
    //   ))}
    // </div>

    // if we use like above it will be very big code so we can use like below 
    // we need to create another component called fruit
//   );    


return(
    <div>
        {fruits.map(fruit => (
            <Fruit name ={fruit.name} price ={fruit.price}/>

        ))}
    </div>
)
}

export default Fruits;
