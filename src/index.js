import Basket from "./routes/cart/Basket";
import { BorderId, ButtonCart, ButtonItem } from "./StyledComponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from './Data';
import Information from './routes/product/Information';
import Layout from "./render/Layout";
import Payment from "./routes/cart/Payment";
import ReactDOM from "react-dom";
import { useState } from 'react';

export default function App() {
  const { client, nav, products, productOptions } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onClean = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty = 0 } : x
        )
      );
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              client={client}
              cartItems={cartItems}
              nav={nav}
            />
          }
        >
          <Route
            path="cart"
            element={
              <Basket
                BorderId={BorderId}
                ButtonCart={ButtonCart}
                ButtonItem={ButtonItem}
                cartItems={cartItems}
                client={client}
                onAdd={onAdd}
                onClean={onClean}
                onRemove={onRemove}
              />
            }
          />
          <Route
            path="/"
            element={
              <Information
                BorderId={BorderId}
                ButtonItem={ButtonItem}
                onAdd={onAdd}
                onClean={onClean}
                onRemove={onRemove}
                product={products}
                productOptions={productOptions}
              />
            }
          />
          <Route
            path="cart/payments"
            element={
              <Payment
                ButtonCart={ButtonCart}
                cartItems={cartItems}
                client={client}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
