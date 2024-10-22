import { useState } from 'react'
import './index.css'
import MyComponent from './pages/MyComponent'
import Aluno from './components/aluno'
import Home from './components/home'
import Empresa from './components/empresa'
import Admin from './components/admin'
import Professor from './components/professor'
import ProfessorLogin from './components/professorLogin'
import AdminAluno from './components/adminAluno'
import AdminEmpresa from './components/adminEmpresa'
import AdminProfessor from './components/adminProfessor'
import EditStudentPage from './pages/EditStudentPage'

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
            path="/estudante/editar/:id"
            element={<EditStudentPage />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
