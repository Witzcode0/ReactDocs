import React, { useReducer } from "react";

// Step 1: Define the reducer function to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    // Step 2: Add an item to the cart
    case "ADD_ITEM":
      return [...state, { id: action.payload.id, name: action.payload.name, price: action.payload.price }];
    
    // Step 3: Remove an item from the cart based on its ID
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    // Step 4: Clear all items from the cart
    case "CLEAR_CART":
      return [];

    // Step 5: Return the current state if action type is unknown
    default:
      return state;
  }
};

// Step 6: Define the initial cart state (empty array)
const initialCart = [];

const ShoppingCart = () => {
  // Step 7: Use useReducer hook to manage cart state
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  // Step 8: Sample products available for purchase
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
  ];

  return (
    <div>
      {/* Step 9: Display Shopping Cart heading */}
      <h2>Shopping Cart</h2>

      {/* Step 10: Display available products */}
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name} - ${product.price}</p>
          {/* Step 11: Add product to cart using dispatch */}
          <button onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}>
            Add to Cart
          </button>
        </div>
      ))}

      {/* Step 12: Display cart items */}
      <h3>Cart Items</h3>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              {/* Step 13: Remove item from cart using dispatch */}
              <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Step 14: Clear entire cart when items exist */}
      {cart.length > 0 && (
        <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default ShoppingCart;
