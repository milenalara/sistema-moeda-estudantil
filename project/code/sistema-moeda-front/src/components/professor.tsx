import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import { Password } from '@mui/icons-material';

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

  const doarAluno = async (aluno) => {

    const newAluno = {

      name: aluno.name,
      email: aluno.email,
      CPF: aluno.CPF,
      RG: aluno.RG,
      password: aluno.password,
      balance: aluno.balance + moedasDoar.moedas

    }

    const res = await axios.put('http://localhost:8080/api/student/' + aluno.id, newAluno)

  }


  return (
    <>
      <h1>Hello professor {professor.name}</h1>

      <h2>Saldo: {professor.balance}</h2>

      Quantidade de moedas a ser doada:
      <input type="number" name="meadas" id="moedas" value={moedasDoar.moedas} onChange={handleMoedasDoarChange} />

      <h2>Alunos:</h2>
      <ul>
        {alunos.map((aluno) => (
          <><li key={aluno.name}>{aluno.name}, Saldo: {aluno.balance}</li>
            <button onClick={() => doarAluno(aluno)}>Dar {moedasDoar.moedas} moedas</button></>
        ))}
      </ul>

    </>
  )
}

export default Professor;