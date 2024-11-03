import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function EmpresaLogin() {
  const [count, setCount] = useState(0)
  const [empresas, setEmpresas] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    getEmpresas();
  }, []);

  const getEmpresas = async () => {
    const res = await axios.get('http://localhost:8080/api/company')
    setEmpresas(res.data)
  }

  const loginAs=(id: number)=>{
    navigate('/empresa',{state:{id}});
      }

  return (
    <>
      <h1>Hello empresa</h1>

      <h2>Empresas:</h2>
      <ul>
        {empresas.map((empresa) => (
          <><li key={empresa.id}>{empresa.name}</li>
            <button onClick={() => loginAs(empresa.id)}>Login</button></>
        ))}
      </ul>
    </>
  )
}

export default EmpresaLogin;