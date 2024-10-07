import { useState } from 'react'
import './index.css'
import MyComponent from './pages/MyComponent'
import Aluno from './components/aluno'
import Home from './components/home'
import Empresa from './components/empresa'
import AdminAluno from './components/adminAluno'

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
            path="/createAluno"
            element={<AdminAluno />}
          />
          <Route
            path="/empresa"
            element={<Empresa />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
