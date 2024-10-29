import { useState } from 'react'
import './index.css'
import MyComponent from './pages/MyComponent'
import Aluno from './components/aluno'
import AlunoHistory from './components/alunoHistory'
import Home from './components/home'
import Empresa from './components/empresa'
import Admin from './components/admin'
import Professor from './components/professor'
import ProfessorLogin from './components/professorLogin'
import CompanyLogin from './components/empresaLogin'
import ProfessorHistory from './components/professorHistory'
import AdminAluno from './components/adminAluno'
import AdminEmpresa from './components/adminEmpresa'
import AdminProfessor from './components/adminProfessor'
// import EditStudentPage from './pages/EditStudentPage'
import AdminAlunoEdit from './components/adminAlunoEdit'
import AdminEmpresaEdit from './components/adminEmpresaEdit'
import VantagemEdit from './components/vantagemEdit'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/aluno"
            element={<Aluno />}
          />
          <Route
            path="/alunoHistory"
            element={<AlunoHistory />}
          />
          <Route
            path="/adminAluno"
            element={<AdminAluno />}
          />
          <Route
            path="/empresa"
            element={<Empresa />}
          />
          <Route
            path="/admin"
            element={<Admin />}
          />
          <Route
            path="/adminEmpresa"
            element={<AdminEmpresa />}
          />
          <Route
            path="/adminProfessor"
            element={<AdminProfessor />}
          />
          <Route
            path="/professor"
            element={<Professor />
            }
          />
          <Route
            path="/professorLogin"
            element={<ProfessorLogin />}
          />
          <Route
            path="/professorHistory"
            element={<ProfessorHistory />}
          />
          <Route
            path="/adminAlunoEdit/:id"
            element={<AdminAlunoEdit />}
          />
          <Route
            path="/vantagemEdit/:id"
            element={<VantagemEdit />}
          />
          <Route
            path="/adminEmpresa/edit/:id"
            element={<AdminEmpresaEdit />}
          />
          <Route
            path="/empresaLogin"
            element={<CompanyLogin />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
