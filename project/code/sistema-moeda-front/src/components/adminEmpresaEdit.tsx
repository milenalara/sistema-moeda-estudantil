import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminEmpresaEdit() {
  const { id } = useParams(); // Pegando o ID da empresa da URL
  const [company, setCompany] = useState({ name: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    getCompanyById();
  }, []);

  const getCompanyById = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/company/${id}`);
      setCompany(res.data);
    } catch (error) {
      console.error("Erro ao buscar empresa:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8080/api/company/update/${id}`, company);
      navigate('/admin/empresas');
    } catch (error) {
      console.error("Erro ao salvar alterações:", error);
    }
  };
  

  return (
    <div>
      <h2>Editar Empresa</h2>
      <label>Nome:</label>
      <input 
        type="text" 
        name="name" 
        value={company.name} 
        onChange={handleInputChange} 
      />
      <label>Senha:</label>
      <input 
        type="password" 
        name="password" 
        value={company.password} 
        onChange={handleInputChange} 
      />
      <button onClick={handleSave}>Salvar Alterações</button>
    </div>
  );
}

export default AdminEmpresaEdit;
