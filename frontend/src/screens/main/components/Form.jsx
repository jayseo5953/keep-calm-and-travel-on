import React, { useState } from "react";
import Button from "@material-ui/core/Button";


const Form = props => {
  let addOrSubtract = "";
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      autoComplete="off"
      className="budget-input-form"
      onSubmit={e => {
        e.preventDefault();
        if (isNaN(inputValue)) return;
        if (addOrSubtract === "add") {
          props.setBudget(Number(props.budget) + Number(inputValue || 0));
          setInputValue("");
          return;
        }
        if (addOrSubtract === "subtract") {
          props.setBudget(Number(props.budget) - Number(inputValue || 0));
          setInputValue("");
          return;
        }
      }}
    >
      <label htmlFor="budget-input">
        {" "}
        {!addOrSubtract && !props.budget ? "Enter Budget" : "Adjust Budget"}
      </label>

      <input
        className="input-budget"
        type="text"
        name="input-budget"
        value={inputValue}
        id="budget-input"
        onChange={e => {
          setInputValue(e.target.value);
        }}
      />
      {!addOrSubtract && !props.budget ? (
        <Button
          style={{ width: "5vw" }}
          variant="contained"
          color="primary"
          type="submit"
          onClick={() => {
            if (isNaN(inputValue)) return;
            props.setBudget(Number(inputValue) || 0);
            setInputValue("");
            addOrSubtract = "submitted";
          }}
        >
          Submit
        </Button>
      ) : (
        <div className="plus-minus">
          <Button
            style={{ width: "1vw" }}
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => {
              addOrSubtract = "add";
            }}
          >
            +
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => {
              addOrSubtract = "subtract";
            }}
          >
            -
          </Button>
        </div>
      )}
    </form>
  );
};

export default Form;