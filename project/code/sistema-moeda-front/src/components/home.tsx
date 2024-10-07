import { useState } from 'react'
import { Link } from "react-router-dom";

function home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Página home</h1>
      <Link to="/aluno">Entrar como aluno</Link>
      <br></br>
      <Link to="/empresa">Entrar como empresa</Link>
    </>
  )
}

export default home;