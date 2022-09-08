import { Home } from "./screens/Home";
import { Routes, Route } from "react-router-dom";
import { Statistics } from "./screens/Statistics";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/statistics"
          element={<Statistics countries={["USA", "PL", "DE"]} />}
        />
        <Route path="/news" element={<Home />} />
        <Route path="/settings" element={<Home />} />
      </Routes>
    </div>
  );
}
// countries={["USA", "PL", "DE"]}

export default App;
