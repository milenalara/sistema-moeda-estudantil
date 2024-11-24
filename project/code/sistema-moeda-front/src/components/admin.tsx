import { useState } from 'react'
import { Link } from "react-router-dom";

function Admin() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Boas vindas!</h1>
     <Link to="/admin/alunos">Administrar alunos</Link>
    <br></br>
     <Link to="/admin/empresas">Administrar empresas</Link>
     <br />
     <Link to="/admin/professores">Administrar professor</Link>
    </>
  )
}

export default Admin;