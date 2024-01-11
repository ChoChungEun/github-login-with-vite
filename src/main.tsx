import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AuthCallback from "./pages/AuthCallback.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/auth/github/callback" element={<AuthCallback />} />
    </Routes>
  </Router>
);
