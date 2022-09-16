import { Home } from "./screens/Home";
import { Routes, Route } from "react-router-dom";
import { Statistics } from "./screens/Statistics";
import { CountriesProvider } from "./context/Countries";

function App() {
  return (
    <div className="App">
      <CountriesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/news" element={<Home />} />
          <Route path="/settings" element={<Home />} />
        </Routes>
      </CountriesProvider>
    </div>
  );
}

export default App;
