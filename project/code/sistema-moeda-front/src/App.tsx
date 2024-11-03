import { useState } from "react";
import "./index.css";
import Aluno from "./components/aluno";
import Home from "./components/home";
import Empresa from "./components/empresa";
import Admin from "./components/admin";
import Professor from "./components/Professor";
import ProfessorLogin from "./components/professorLogin";
import CompanyLogin from "./components/empresaLogin";
import ProfessorHistory from "./components/professorHistory";
import AdminAluno from "./components/adminAluno";
import AdminEmpresa from "./components/adminEmpresa";
import AdminProfessor from "./components/adminProfessor";
import EditStudentPage from "./pages/Admin/EditStudentPage";
import AdminAlunoEdit from "./components/adminAlunoEdit";
import AdminEmpresaEdit from "./components/adminEmpresaEdit";
import AdminStudentPage from "./pages/Admin/AdminStudentPage";
import VantagemEdit from "./components/vantagemEdit";
import LoginPage from "./pages/Login/LoginPage";
import StudentPage from "./pages/Student/StudentPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UserProvider } from "./context/UserContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/aluno" element={<Aluno />} /> */}
          <Route path="/adminAluno" element={<AdminAluno />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminEmpresa" element={<AdminEmpresa />} />
          <Route path="/adminProfessor" element={<AdminProfessor />} />
          <Route path="/professor" element={<Professor />} />
          <Route path="/professorLogin" element={<ProfessorLogin />} />
          <Route path="/adminAlunoEdit/:id" element={<AdminAlunoEdit />} />
          <Route path="/professorHistory" element={<ProfessorHistory />} />
          <Route path="/adminAlunoEdit/:id" element={<AdminAlunoEdit />} />
          <Route path="/vantagemEdit/:id" element={<VantagemEdit />} />
          <Route path="/adminEmpresa/edit/:id" element={<AdminEmpresaEdit />} />
          <Route path="/admin/estudantes" element={<AdminStudentPage />} />
          <Route path="/empresaLogin" element={<CompanyLogin />} />
          <Route path="/aluno/login" element={<LoginPage />} />
          <Route path="/admin/editar/aluno/:id" element={<EditStudentPage />} />
          <Route path="/aluno" element={<StudentPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
