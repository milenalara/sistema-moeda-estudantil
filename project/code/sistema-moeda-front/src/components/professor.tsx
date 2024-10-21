import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';

function Professor(id: number) {
  const [count, setCount] = useState(0)
  const [professor, setProfessor] = useState([])

  const location = useLocation();

  useEffect(() => {
    getProfessor();
  }, []);

  const getProfessor = async () => {
    const res = await axios.get('http://localhost:8080/api/professor/'+location.state.id)
    setProfessor(res.data)
  }


  return (
    <>
     <h1>Hello professor {professor.name}</h1>

    <h2>Saldo: {professor.saldo}</h2>
    </>
  )
}

export default Professor;