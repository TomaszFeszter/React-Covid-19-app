import { Home } from "./screens/Home";

function App() {
  console.log("app");
  return (
    <div className="App">
      <Home countries={["USA", "PL", "DE"]} />
    </div>
  );
}
// countries={["USA", "PL", "DE"]}

export default App;
