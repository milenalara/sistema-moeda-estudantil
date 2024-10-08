import { useState } from 'react'
import './index.css'
import MyComponent from './pages/MyComponent'
import Aluno from './components/aluno'
import Home from './components/home'
import Empresa from './components/empresa'
import Admin from './components/admin'
import AdminAluno from './components/adminAluno'
import AdminEmpresa from './components/adminEmpresa'

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
        </Routes>
      </Router>
    </>
  )
}

export default App
