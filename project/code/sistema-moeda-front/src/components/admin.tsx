import { useState } from 'react'
import { Link } from "react-router-dom";

function Aluno() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello admin</h1>

     <Link to="/adminAluno">Administrar alunos</Link>
    <br></br>
     <Link to="/adminEmpresa">Administrar empresas</Link>
     <br />
     <Link to="/adminProfessor">Administrar professor</Link>
    </>
  )
}

export default Aluno;