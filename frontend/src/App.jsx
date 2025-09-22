import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import AuthProvider from "./context/AuthContext";
import { NotificationProvider } from "./context/NotificationContext";
import NotificationContainer from "./components/ui/NotificationContainer";
import { useAuth } from "./context/AuthContext";

function App() {
  return (
    <NotificationProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </NotificationProvider>
  );
}

function AppRoutes() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <NotificationContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
