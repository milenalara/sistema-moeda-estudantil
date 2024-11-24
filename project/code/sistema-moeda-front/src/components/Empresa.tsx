import { useState, useEffect, useContext } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from '../context/UserContext';

function Empresa(id: Number) {
  const [count, setCount] = useState(0)
  const [vantagens, setVantagens] = useState([])
  const [empresa, setEmpresa] = useState([])
  const [newVantagem, setNewVantagem] = useState({name: '', description: '', cost: 0, companyId:0})
  const userContext = useContext(UserContext);


  const handleNameChange = (e) => {
    setNewVantagem({ ...newVantagem, name: e.target.value });
  }
  const handleDescriptionChange = (e) => {
    setNewVantagem({ ...newVantagem, description: e.target.value });
  }
  const handleCostChange = (e) => {
    setNewVantagem({ ...newVantagem, cost: e.target.value });
  }

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    getEmpresa();
    getVantagens();
  }, []);

  const getEmpresa = async () => {
    const res = await axios.get(`http://localhost:8080/api/company/${userContext?.userId}`)
    console.log("empresa", res.data)
    setEmpresa(res.data)
  }

  const getVantagens = async () => {
    const res = await axios.get(`http://localhost:8080/api/advantage/company/${userContext?.userId}`)
    console.log("vantagens", res.data)
    setVantagens(res.data)
  }

  const createVantagem = async () => {
    newVantagem.companyId = userContext?.userId;
    const res = await axios.post('http://localhost:8080/api/advantage', newVantagem);
    getVantagens();
  };

  const deleteVantagem = async (id: Number) => {
    const res = await axios.delete('http://localhost:8080/api/advantage/delete/'+ id)
    getVantagens()
  }

  return (
    <>
     <h1>{empresa.name} </h1>

     <ul>
        {vantagens.map((vantagem) => (
          <li key={vantagem.name}>
            {vantagem.name} 
            <button onClick={() => deleteVantagem(vantagem.id)}>Deletar</button>
            <Link to={`/vantagemEdit/${vantagem.id}`}>
              <button>Editar</button>
            </Link>
          </li>
        ))}
      </ul>

     <h2>Criar vantagem:</h2>
      Nome:
      <input type="text" name="aluno name" id="name" value={newVantagem.name} onChange={handleNameChange} />
      Descricao:
      <input type="text" name="aluno email" id="email" value={newVantagem.description} onChange={handleDescriptionChange} />
      Custo:
      <input type="number" name="aluno cpf" id="cpf" value={newVantagem.cost} onChange={handleCostChange} />

      <button onClick={createVantagem}>Salvar vantagem</button>
    
    </>
  )
}

export default Empresa;