import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

function ProfessorHistory(id: number) {
  const [count, setCount] = useState(0)
  const [professor, setProfessor] = useState([])
  const [pagamentos, setPagamentos] = useState([])

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    getProfessor();
    getPagamentos();
  }, []);

  const getProfessor = async () => {
    const res = await axios.get('http://localhost:8080/api/professor/' + location.state.id)
    setProfessor(res.data)
  }

  const getPagamentos = async () => {
    const res = await axios.get('http://localhost:8080/api/payment')
    setPagamentos(res.data)
  }

  const goToProf=(id: number)=>{
    navigate('/professor',{state:{id}});
      }

    

  return (
    <>
      <h1>Hello professor {professor.name}</h1>

      <button onClick={() => goToProf(location.state.id)}>Voltar</button>


      <h2>Historico:</h2>
      <ul>
        {pagamentos.map((pagamento) => (
          <><li key={pagamento.id}>{pagamento.date}, Valor: {pagamento.cost} de {pagamento.professorId.name} para {pagamento.studentId.name} {pagamento.description}</li></>
        ))}
      </ul>

    </>
  )
}


export default ProfessorHistory;