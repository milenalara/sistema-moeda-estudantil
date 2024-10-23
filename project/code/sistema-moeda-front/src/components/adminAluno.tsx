import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

function adminAluno() {
  const [count, setCount] = useState(0)
  const [alunos, setAlunos] = useState([])
  const [newAluno, setAluno] = useState({name: '', email: '', CPF: '', RG: '', educationalInstitutionId: 0, courseId: 0})

  useEffect(() => {
    getAlunos();
  }, []);

  const handleNameChange = (e) => {
    setAluno({ ...newAluno, name: e.target.value });
  }
  const handleEmailChange = (e) => {
    setAluno({ ...newAluno, email: e.target.value });
  }
  const handleCpfChange = (e) => {
    setAluno({ ...newAluno, CPF: e.target.value });
  }
  const handleRgChange = (e) => {
    setAluno({ ...newAluno, RG: e.target.value });
  }
  const handleInstitutionChange = (e) => {
    setAluno({ ...newAluno, educationalInstitutionId: Number(e.target.value) });
  }
  const handleCourseChange = (e) => {
    setAluno({ ...newAluno, courseId: Number(e.target.value) });
  }
  const getAlunos = async () => {
    const res = await axios.get('http://localhost:8080/api/student')
    setAlunos(res.data)
  }
  const createAluno = async () => {
    await axios.post('http://localhost:8080/api/student', newAluno)
  }
  const deleteAluno = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:8080/api/student/delete/${id}`)
  }
  
  return (
    <>
      <h1>Hello aluno</h1>

      <h2>Alunos:</h2>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.name}>
            {aluno.name} 
            <button onClick={() => deleteAluno(aluno.id)}>Deletar</button>
            <Link to={`/adminAlunoEdit/${aluno.id}`}>
              <button>Editar</button>
            </Link>
          </li>
        ))}
      </ul>

      <h2>Criar aluno:</h2>
      Nome:
      <input type="text" name="aluno name" id="name" value={newAluno.name} onChange={handleNameChange} />
      Email:
      <input type="text" name="aluno email" id="email" value={newAluno.email} onChange={handleEmailChange} />
      CPF:
      <input type="number" name="aluno cpf" id="cpf" value={newAluno.CPF} onChange={handleCpfChange} />
      RG:
      <input type="number" name="aluno rg" id="rg" value={newAluno.RG} onChange={handleRgChange} />
      Id instituicao:
      <input type="number" name="aluno institution" id="institution" value={newAluno.educationalInstitutionId} onChange={handleInstitutionChange} />
      ID curso:
      <input type="number" name="aluno course" id="course" value={newAluno.courseId} onChange={handleCourseChange} />

      <button onClick={createAluno}>Salvar aluno</button>
      <button onClick={getAlunos}>Recarregar alunos</button>
    </>
  )
}

export default adminAluno;
