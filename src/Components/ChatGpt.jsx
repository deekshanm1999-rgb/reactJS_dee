import React, { useState } from "react";

function Task({tasks}) {
  const [product, setProduct] = useState("");

  function addProduct(e) {
    e.preventDefault();
    console.log(product);
  }

  function handlelist(e){

  }
  return (
    <div>
      <h1>To-Do List</h1>

      <label>Please Enter The Product Name : </label>
      <input onChange={(e) => setProduct(e.target.value)} type={product} />
      <form>
    
      </form>
      <button
        onClick={(e) => {
          addProduct(e);
        }}
      >
        Add Product
      </button>
    </div>
  );
}

export default Task;
