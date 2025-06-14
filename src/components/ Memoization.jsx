import React, { useState, useMemo } from "react";

function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

export default function Memoization() {
  const [input, setInput] = useState(5);
  const result = useMemo(() => factorial(input), [input]);

  return (
    <div>
      <h2>Memoization</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Factorial: {result}</p>
    </div>
  );
}
