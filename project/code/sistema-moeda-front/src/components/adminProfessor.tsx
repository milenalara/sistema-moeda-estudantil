import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';


function adminProfessor() {
  const [count, setCount] = useState(0)
  const [professors, setProfessors] = useState([])
  const [newProfessor, setProfessor] = useState({name: '', CPF: '', departamentId:1, password: 'default'})

  useEffect(() => {
    getProfessors();
  }, []);

  const handleNameChange = (e) => {
    setProfessor({ ...newProfessor, name: e.target.value });
  }
  const handleCpfChange = (e) => {
    setProfessor({ ...newProfessor, CPF: e.target.value });
  }
  const handlePasswordChange = (e) => {
    setProfessor({ ...newProfessor, password: e.target.value });
  }
  const getProfessors = async () => {
    const res = await axios.get('http://localhost:8080/api/professor')
    setProfessors(res.data)
  }
  const createProfessor = async () => {
    await axios.post('http://localhost:8080/api/professor', newProfessor)
  }
  const deleteProfessor = async (id) => {
    
    await axios.delete(`http://localhost:8080/api/professor/delete/${id}`)}
  
  return (
    <>

      <h2>Professores:</h2>
      <ul>
        {professors.map((professor) => (
          <><li key={professor.name}>{professor.name}</li>
          <button onClick={() => deleteProfessor(professor.id)}>Deletar</button></>
        ))}
      </ul>
w
    </>
  )
}

export default adminProfessor;