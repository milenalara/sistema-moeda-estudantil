import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

function createAluno() {
  const [count, setCount] = useState(0)
  const [alunos, setAlunos] = useState([])
  const [newAluno, setAluno] = useState({id: 0, name: '', email: '', cpf: '', rg: '', institution: 0, course: 0})

  useEffect(() => {
    getAlunos();
  }, []);


  const handleIdChange = (e) => {
    setAluno({ ...newAluno, id: Number(e.target.value) });
  }
  const handleNameChange = (e) => {
    setAluno({ ...newAluno, name: e.target.value });
  }
  const handleEmailChange = (e) => {
    setAluno({ ...newAluno, email: e.target.value });
  }
  const handleCpfChange = (e) => {
    setAluno({ ...newAluno, cpf: e.target.value });
  }
  const handleRgChange = (e) => {
    setAluno({ ...newAluno, rg: e.target.value });
  }
  const handleInstitutionChange = (e) => {
    setAluno({ ...newAluno, institution: Number(e.target.value) });
  }
  const handleCourseChange = (e) => {
    setAluno({ ...newAluno, course: Number(e.target.value) });
  }
  const getAlunos = async () => {
    const res = await axios.get('http://localhost:8080/api/student')
    setAlunos(res.data)
  }
  const createAluno = async () => {
    await axios.post('http://localhost:8080/api/student', newAluno)
  }
  return (
    <>
      <h1>Hello aluno</h1>

      <p>Alunos:</p>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>{aluno.name}</li>
        ))}
      </ul>

      <p>Criar aluno:</p>
      Id:
      <input type="number" name="aluno id" id="id" value={newAluno.id} onChange={handleIdChange} />
      Nome:
      <input type="text" name="aluno name" id="name" value={newAluno.name} onChange={handleNameChange} />
      Email:
      <input type="text" name="aluno email" id="email" value={newAluno.email} onChange={handleEmailChange} />
      CPF:
      <input type="number" name="aluno cpf" id="cpf" value={newAluno.cpf} onChange={handleCpfChange} />
      RG:
      <input type="number" name="aluno rg" id="rg" value={newAluno.rg} onChange={handleRgChange} />
      Id instituicao:
      <input type="number" name="aluno institution" id="institution" value={newAluno.institution} onChange={handleInstitutionChange} />
      ID curso:
      <input type="number" name="aluno course" id="course" value={newAluno.course} onChange={handleCourseChange} />



      <button onClick={createAluno}>Salvar aluno</button>
      <button onClick={getAlunos}>Recarregar alunos</button>
    </>
  )
}

export default createAluno;