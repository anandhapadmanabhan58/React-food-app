import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const shoWcardHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={shoWcardHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
};

export default App;
