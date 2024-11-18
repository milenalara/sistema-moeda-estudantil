import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from '../context/UserContext';

function ProfessorLogin() {
  const [count, setCount] = useState(0)
  const [professors, setProfessors] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    getProfessors();
  }, []);

  const getProfessors = async () => {
    const res = await axios.get('http://localhost:8080/api/professor')
    setProfessors(res.data)
  }

  const loginAs=(id: number)=>{
    UserContext.userId = id
    navigate('/professor',{state:{id}});
      }

  return (
    <>
      <h1>Hello professor</h1>

      <h2>Professores:</h2>
      <ul>
        {professors.map((professor) => (
          <><li key={professor.id}>{professor.name}</li>
            <button onClick={() => loginAs(professor.id)}>Login</button></>
        ))}
      </ul>
    </>
  )
}

export default ProfessorLogin;