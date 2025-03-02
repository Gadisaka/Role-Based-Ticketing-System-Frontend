import { Box } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/common/Sidebar";
import Navbar from "./components/common/Navbar";

function App() {
  const isAuthenticated = true; // Mock authentication state

  return (
    <Router>
      <Box className="w-full h-screen flex flex-col">
        <Box>
          <Sidebar />
          <Navbar />
        </Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/auth" />}
          />

          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
