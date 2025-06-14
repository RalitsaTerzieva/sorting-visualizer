import Memoization from "./components/ Memoization";
import SetMapView from "./components/SetMapView";
import SortVisualizer from "./components/SortVisualizer";
import TreeView from "./components/TreeView";
import TypedArrayView from "./components/TypedArrayView";
import './App.css';


function App() {
  return (
    <div className="container">
      <h1>Sorting Visualizer</h1>
     
     <div className="flex-row">
        <SortVisualizer />

        <Memoization />

        <SetMapView />

        <TreeView />

        <TypedArrayView />
      </div>

    </div>
  );
}

export default App;
