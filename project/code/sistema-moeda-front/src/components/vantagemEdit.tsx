import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function vantagemEdit() {
  const { id } = useParams();
  const [advantage, setAdvantage] = useState({ name: '', description: '', cost: 0, companyId: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    getAdvantageById();
  }, []);

  const getAdvantageById = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/advantage/${id}`);
      setAdvantage(res.data);
    } catch (error) {
      console.error("Erro ao buscar vantagem:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdvantage({ ...advantage, [name]: value });
  };

  const handleSave = async () => {
    try {
      advantage.companyId=advantage.companyId.id;
      await axios.put(`http://localhost:8080/api/advantage/update/${id}`, advantage);
      navigate('/empresa', { state: { id } });
    } catch (error) {
      console.error("Erro ao salvar alterações:", error);
    }
  };


  return (
    <div>
      <h2>Editar Vantagem</h2>
      <label>Nome:</label>
      <input
        type="text"
        name="name"
        value={advantage.name}
        onChange={handleInputChange}
      />
      <label>Descricao:</label>
      <input
        type="text"
        name="description"
        value={advantage.description}
        onChange={handleInputChange}
      />
      <label>Custo:</label>
      <input
        type="number"
        name="cost"
        value={advantage.cost}
        onChange={handleInputChange}
      />
      <button onClick={handleSave}>Salvar Alterações</button>
    </div>
  );
}

export default vantagemEdit;
