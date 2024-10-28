import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';


function adminEmpresa() {
  const [count, setCount] = useState(0)
  const [companies, setCompanies] = useState([])
  const [newCompany, setCompany] = useState({ name: '', password: '' })

  useEffect(() => {
    getCompanies();
  }, []);

  const handleNameChange = (e) => {
    setCompany({ ...newCompany, name: e.target.value });
  }
  const handlePasswordChange = (e) => {
    setCompany({ ...newCompany, password: e.target.value });
  }

  const getCompanies = async () => {
    const res = await axios.get('http://localhost:8080/api/company')
    setCompanies(res.data)
  }
  const createCompany = async () => {
    await axios.post('http://localhost:8080/api/company', newCompany)
    getCompanies()
  }
  const deleteCompany = async (id) => {
    await axios.delete(`http://localhost:8080/api/company/delete/${id}`)
    getCompanies()
  }

  return (
    <>
      <h1>Hello empresa</h1>

      <h2>Empresas:</h2>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            {company.name}
            <button onClick={() => deleteCompany(company.id)}>Deletar</button>
            <Link to={`/adminEmpresa/edit/${company.id}`}>
              <button>Editar</button>
            </Link>
          </li>
        ))}
      </ul>

      <h2>Criar empresa:</h2>
      Nome:
      <input type="text" name="company name" id="name" value={newCompany.name} onChange={handleNameChange} />
      Senha:
      <input type="text" name="company password" id="password" value={newCompany.password} onChange={handlePasswordChange} />




      <button onClick={createCompany}>Salvar empresa</button>
      <button onClick={getCompanies}>Recarregar empresas</button>
    </>
  )
}

export default adminEmpresa;