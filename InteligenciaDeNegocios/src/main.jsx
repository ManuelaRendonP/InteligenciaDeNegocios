import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter";

createRoot(document.getElementById("root")).render(
  <Router> {/* Asegúrate de que este es el único Router */}
    <AuthProvider> 
      <AppRouter />
    </AuthProvider>
  </Router>
);
