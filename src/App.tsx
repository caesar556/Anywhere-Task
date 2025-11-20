import { Routes, Route } from "react-router-dom";
import { Home, Layout } from "./pages";
import { requireAuth } from "./hoc/RequireAuth";
import type { JSX } from "react";

function App(): JSX.Element {
  const ProtectedLayout = requireAuth(Layout);

  return (
    <main>
      <Routes>
        <Route path="/dashboard" element={<ProtectedLayout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
