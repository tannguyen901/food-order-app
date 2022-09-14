import Input from "../../UI/Input";
import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const AmountInputref = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = AmountInputref.current.value;
    // (+) converts string number to number number
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber)
  };
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={AmountInputref}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
