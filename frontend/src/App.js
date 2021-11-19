import logo from './logo.svg';
import './App.css';
import GetItems from "./GetItems";
import DrinkItems from "./DrinkItems";
import FoodItems from "./FoodItems";

function App() {
  return (
    <div className="App">
      <GetItems />
      <DrinkItems />
      <FoodItems />
    </div>
  );
}

export default App;
