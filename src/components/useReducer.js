import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, 0);
  //const [count, setCount] = useState(0);
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <p>{state}</p>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
    </div>
  );
}

export default UseReducer;
