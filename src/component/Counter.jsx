import React from "react";

export default function Counter(props) {
    const { onIncrement, onDecrement } = props;
  
    return (
        <div>
            <h4>counter component</h4>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
        </div>
    );
}
