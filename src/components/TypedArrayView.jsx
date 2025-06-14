import React from "react";

export default function TypedArrayView() {
  
  const intArray = new Int32Array([1, 2, 3, 4]);

  return (
    <div>
      <h2>Typed Array</h2>
      <p>Int32Array: {Array.from(intArray).join(", ")}</p>
    </div>
  );
}
