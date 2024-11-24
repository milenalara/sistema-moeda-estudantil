import { useEffect, useState } from 'react'
import axios from 'axios';


function AdminProfessor() {
  const [count, setCount] = useState(0)
  const [professors, setProfessors] = useState([])
  const [newProfessor, setProfessor] = useState({name: '', CPF: '', departamentId: 1, password: 'default', balance:0})

  useEffect(() => {
    getProfessors();
  }, [professors]);

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
  const deleteProfessor = async (id: number) => {
    
    await axios.delete(`http://localhost:8080/api/professor/delete/${id}`)}

  const updateSemester = async () => {
    professors.forEach(async professor => {
      professor.balance += 1000;
      delete professor.departmentId;
      const res = await axios.put(`http://localhost:8080/api/professor/${professor.id}`, professor)
    });
    alert("1000 moedas foram doadas a cada professor");
  }
  
  return (
    <>

      <button onClick={() => updateSemester()}>Simular passar semestre (+1000 moedas para todos profs)</button>
      <h2>Professores:</h2>
      <ul>
        {professors.map((professor) => (
          <><li key={professor.name}>{professor.name} | Saldo: {professor.balance} </li>
          <button onClick={() => deleteProfessor(professor.id)}>Deletar</button></>
        ))}
      </ul>
    </>
  )
}

export default AdminProfessor;