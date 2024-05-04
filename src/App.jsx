import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./Component/ProtectedRoute ";
import "./App.css";
import Dashboard from "./Pages/pageDashboard";
import Login from "./Pages/pageLogin";
import Registrasi from "./Pages/pageRegistrasi";
import Doctors from "./Pages/pageTableDoctors";
import Kuisioner from "./Pages/pageKuisioner";
import Users from "./Pages/pageTableUser";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/pageRegistrasi" element={<Registrasi />} />
          <Route
            path="/pageDashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pageTableDoctors"
            element={
              <ProtectedRoute>
                <Doctors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pageTableUsers"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pageKuisioner"
            element={
              <ProtectedRoute>
                <Kuisioner />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
