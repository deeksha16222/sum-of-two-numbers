import React, { useState } from "react";

export default function Calculate() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState();
  function calculatetotal() {
    setTotal(number1 + number2);
  }
  return (
    <div>
      <h1> Add two numbers </h1>
      <input
        type="number"
        placeholder="Enter first number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />{" "}
      <br /> <br />
      <input
        type="number"
        placeholder="Enter Second number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />{" "}
      <br /> <br />
      <button onClick={calculatetotal}> ADD </button> <br />
      <p> Total : {total || ""} </p>
    </div>
  );
}
