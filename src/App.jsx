import { Home } from "./screens/Home";
import { Routes, Route } from "react-router-dom";
import { Statistics } from "./screens/Statistics";
import { CountriesProvider } from "./context/Countries";
import { NewsProvider } from "./context/News";
import { News } from "./screens/News";
import { NewsPage } from "./screens/NewsPage";

function App() {
  return (
    <div className="App">
      <CountriesProvider>
        <NewsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:newsId" element={<NewsPage />} />
            <Route path="/settings" element={<Home />} />
          </Routes>
        </NewsProvider>
      </CountriesProvider>
    </div>
  );
}

export default App;
