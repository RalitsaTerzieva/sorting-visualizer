import React, { useState } from "react";

function bubbleSort(arr) {
  arr = arr.slice();
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

export default function SortVisualizer() {
  const [array, setArray] = useState([5, 3, 8, 1, 2]);

  const handleSort = () => {
    setArray(bubbleSort(array));
  };
  
  return (
    <div>
      <h2>Sorting Visualizer</h2>
      <p>Before: {array.toString()}</p>
      <button onClick={handleSort}>
        Sort
      </button>
      <p>After: {array.toString()}</p>
    </div>
  );
}
