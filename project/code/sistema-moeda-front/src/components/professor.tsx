import { useState, useEffect, useContext } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from '../context/UserContext';

function Professor(id: number) {
  const [count, setCount] = useState(0)
  const [professor, setProfessor] = useState([])
  const [alunos, setAlunos] = useState([])
  const [pagamentos, setPagamentos] = useState([])
  const [moedasDoar, setMoedas] = useState({ moedas: 0 , descricao: ''})
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const location = useLocation();

  const handleMoedasDoarChange = (e) => {
    setMoedas({ ...moedasDoar, moedas: e.target.value })
  }

  const handleDescDoarChange = (e) => {
    setMoedas({ ...moedasDoar, descricao: e.target.value })
  }

  useEffect(() => {
    getProfessor();
    getAlunos();
  }, []);

  const getProfessor = async () => {
    const res = await axios.get('http://localhost:8080/api/professor/' + userContext.userId)
    console.log("PROFESSOR DATA" + res.data);
    setProfessor(res.data)
  }

  const getAlunos = async () => {
    const res = await axios.get('http://localhost:8080/api/student')
    setAlunos(res.data)
  }

  const goToHistory=(id: number)=>{
    navigate('/professor/historico',{state:{id}});
      }

  const doarAluno = async (aluno) => {
    if(professor.balance < moedasDoar.moedas){
      console.log('moedas insuficientes');
      return
    }
    if(moedasDoar.moedas == 0){
      console.log('favor doar moedas');
      return 
    }

    aluno.balance = Number(aluno.balance) + Number(moedasDoar.moedas)
    
    const newAluno = {
      id: aluno.id,
      name: aluno.name,
      email: aluno.email,
      CPF: aluno.CPF,
      RG: aluno.RG,
      password: aluno.password,
      balance: aluno.balance,
      educationalInstitution: aluno.educationalInstitution,
      course: aluno.course
    }

    if (!newAluno.id) {
      console.error("Aluno ID is not set", newAluno);
      alert("Aluno ID must not be null");
    }

    await axios.put(`http://localhost:8080/api/student/update/${newAluno.id}`, newAluno)


    professor.balance -= moedasDoar.moedas
    delete professor.departmentId

    await axios.put(`http://localhost:8080/api/professor/${professor.id}`, professor)

    const pagamento = {
      date: new Date().toDateString(),
      cost: moedasDoar.moedas,
      professorId: professor.id,
      description: moedasDoar.descricao,
      studentId: aluno.id 
    }

    await axios.post(`http://localhost:8080/api/payment`, pagamento)

    getAlunos()
    getProfessor()
  }
    
  


  return (
    <>
      <h1>Boas vindas {professor.name}</h1>

      <button onClick={() => goToHistory(professor.id)}>Historico</button>

      <h2>Saldo: {professor.balance}</h2>

      Quantidade de moedas a ser doada:
      <input type="number" name="meadas" id="moedas" value={moedasDoar.moedas} onChange={handleMoedasDoarChange} max={professor.balance}/>

      <h2>Alunos:</h2>
      <ul>
        {alunos.map((aluno) => (
          <><li key={aluno.name}>{aluno.name}, Saldo: {aluno.balance}</li>
            <input type="text" placeholder='descrição' onChange={handleDescDoarChange}/>
            <button onClick={() => doarAluno(aluno)}>Dar {moedasDoar.moedas} moedas</button></>
        ))}
      </ul>

    </>
  )
}


export default Professor;