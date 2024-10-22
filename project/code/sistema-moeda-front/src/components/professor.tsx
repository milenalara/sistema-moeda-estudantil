import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';

function Professor(id: number) {
  const [count, setCount] = useState(0)
  const [professor, setProfessor] = useState([])
  const [alunos, setAlunos] = useState([])
  const [moedasDoar, setMoedas] = useState({ moedas: 0 })

  const location = useLocation();

  const handleMoedasDoarChange = (e) => {
    setMoedas({ ...moedasDoar, moedas: e.target.value });
  }

  useEffect(() => {
    getProfessor();
    getAlunos();
  }, []);

  const getProfessor = async () => {
    const res = await axios.get('http://localhost:8080/api/professor/' + location.state.id)
    setProfessor(res.data)
  }

  const getAlunos = async () => {
    const res = await axios.get('http://localhost:8080/api/student')
    setAlunos(res.data)
  }

  const doarAluno = async (id: number) => {

    var aluno = {}

    for (let i = 0; i < alunos.length; i++) {
      if (alunos[i].id == id) {
        aluno = alunos[i].id
      }

    }

    const newAluno = {

      id: aluno.id,
      name: aluno.name,
      email: aluno.email,
      CPF: aluno.CPF,
      RG: aluno.RG,
      saldo: aluno.saldo + 10,
      educationalInstitutionId: aluno.educationalInsitutionId,
      courseId: aluno.courseId
    }


    const res = await axios.put('http://localhost:8080/api/student/' + id, newAluno)

  }


  return (
    <>
      <h1>Hello professor {professor.name}</h1>

      <h2>Saldo: {professor.saldo}</h2>

      Quantidade de moedas a ser doada:
      <input type="number" name="meadas" id="moedas" value={moedasDoar.moedas} onChange={handleMoedasDoarChange} />

      <h2>Alunos:</h2>
      <ul>
        {alunos.map((aluno) => (
          <><li key={aluno.name}>{aluno.name}, Saldo: {aluno.saldo}</li>
            <button onClick={() => doarAluno(aluno.id)}>Dar {moedasDoar.moedas} moedas</button></>
        ))}
      </ul>

    </>
  )
}

export default Professor;