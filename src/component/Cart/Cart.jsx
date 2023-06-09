import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h4>Order summery: {cart.length}</h4>
      {cart.map((tshirt) => (
        <p kay={tshirt._id}>
          {tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
