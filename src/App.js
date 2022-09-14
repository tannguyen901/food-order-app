import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart";

import CartProvider from "./store/CartProvider";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const showCardHandler = () => {
    setCartOpen(true);
  };
  const hideCardHandler = () => {
    setCartOpen(false);
  };
  return (
    <CartProvider>
      {cartOpen && <Cart setCartClose={hideCardHandler} />}
      <Header setCartOpen={showCardHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
