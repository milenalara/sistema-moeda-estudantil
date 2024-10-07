import { useState } from 'react'
import { Link } from "react-router-dom";

function Aluno() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello aluno</h1>

     <Link to="/createAluno">Administrar alunos</Link>
    </>
  )
}

export default Aluno;