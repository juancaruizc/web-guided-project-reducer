import React, { useReducer } from "react";
import reducer from './reducers/calcReducer';
import "./styles.css";


const initialState = {currentValue: 0};

let currentState = reducer(initialState, {type:"ADD", payload: 5});
console.log(currentState);

currentState = reducer(currentState, {type:"SUBTRACT", payload: 2});
console.log(currentState);


export default function App() {
  return (
    <div className="App">
      <textarea rows="1" value="0" id="total" type="text" name="ans"></textarea>
      <br />
      <button type="button" className="btn">
        +
      </button>
    </div>
  );
}
