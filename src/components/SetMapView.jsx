import React from "react";

export default function SetMapView() {
  
  const set = new Set([1, 2, 2, 3]);

 
  const map = new Map([
    ["apple", "red"],
    ["banana", "yellow"],
    ["grape", "purple"],
  ]);

  return (
    <div>
      <h2>Set and Map</h2>
      <p>Set (unique): {Array.from(set).join(", ")}</p>
      <p>Map (color by fruit):</p>
      <ul>
        {Array.from(map.entries()).map(([item, color], index) => (
          <li key={index}>
            {item} - {color}
          </li>
        ))}
      </ul>
    </div>
  );
}
