import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/dashboard" element={<Layout />} />
      </Routes>
    </main>
  );
}

export default App;
