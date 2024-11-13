import { useState } from "react";
import "./index.css";
import LoginPage from "./pages/Login/LoginPage";
import { UserProvider } from "./context/UserContext";
import StudentPage from "./pages/Student/StudentPage";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminPage from "./pages/Admin/AdminPage";
import ProfessorPage from "./pages/Professor/ProfessorPage";
import CompanyPage from "./pages/Company/CompanyPage";
import AccessDeniedPage from "./pages/AccessDenied/AccessDeniedPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/access-denied" element={<AccessDeniedPage />} />
          <Route element={<ProtectedRoute allowedRoles={['Admin']} />}>
            <Route path="/admin/*" element={<AdminPage />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['Student']} />}>
            <Route
              path="/aluno/*"
              element={
                <StudentProvider>
                  <StudentPage />
                </StudentProvider>
              }
            />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['Professor']} />}>
            <Route path="/professor/*" element={<ProfessorPage />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['Company']} />}>
            <Route path="/empresa/*" element={<CompanyPage />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;