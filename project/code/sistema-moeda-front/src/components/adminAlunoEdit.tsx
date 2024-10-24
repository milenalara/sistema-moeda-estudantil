import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditarAluno() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [aluno, setAluno] = useState({name: '', email: '', CPF: '', RG: '', educationalInstitutionId: 0, courseId: 0});

  useEffect(() => {
    getAluno();
  }, []);

  const getAluno = async () => {
    const res = await axios.get(`http://localhost:8080/api/student/${id}`);
    setAluno(res.data);
  }

  const handleUpdate = async () => {
    await axios.put(`http://localhost:8080/api/student/update/${id}`, aluno);
    navigate('/AdminAluno');
  }

  return (
    <>
      <h2>Editar Aluno</h2>
      Nome:
      <input type="text" value={aluno.name} onChange={(e) => setAluno({...aluno, name: e.target.value})} />
      Email:
      <input type="text" value={aluno.email} onChange={(e) => setAluno({...aluno, email: e.target.value})} />
      CPF:
      <input type="text" value={aluno.CPF} onChange={(e) => setAluno({...aluno, CPF: e.target.value})} />
      RG:
      <input type="text" value={aluno.RG} onChange={(e) => setAluno({...aluno, RG: e.target.value})} />
      Id Instituição:
      <input type="number" value={aluno.educationalInstitutionId} onChange={(e) => setAluno({...aluno, educationalInstitutionId: e.target.value})} />
      Id Curso:
      <input type="number" value={aluno.courseId} onChange={(e) => setAluno({...aluno, courseId: e.target.value})} />

      <button onClick={handleUpdate}>Salvar Alterações</button>
    </>
  )
}

export default EditarAluno;
