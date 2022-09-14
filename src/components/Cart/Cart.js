import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    const cartItem = { ...item, amount: 1 };
    ctx.addItem(cartItem);
  };

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

  const cartItems = ctx.items.map((item) => (
    <CartItem
    key={item.id}
    name={item.name}
    price={item.price}
    onRemove={cartItemRemoveHandler.bind(null, item.id)}
    onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  return (
    <Modal setCartClose={props.setCartClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>total amounts</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.setCartClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
