import React, { useState } from "react";

const Basic1 = props => {
  const clickhandler = () => {
    console.log("clicked");
  };

  const [product, setProduct] = useState({ name: "", price: "" });
  return (
    <>
      <form>
        <input
          type="text"
          value={product.name}
          onChange={evt => setProduct({ ...product, name: evt.target.value })}
        />
        <input
          type="text"
          value={product.price}
          onChange={evt => setProduct({ ...product, price: evt.target.value })}
        />
      </form>
      <h3>product name is {product.name}</h3>
      <h3>product name is {product.price}</h3>
      <h1>Hello React! {props.name}</h1>
    </>
  );
};

export default Basic1;
