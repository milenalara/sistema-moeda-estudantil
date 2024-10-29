import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Aluno() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const goToHistory = () => {
    navigate('/alunoHistory', { state: { id: count } });
  };

  return (
    <>
      <h1>Hello aluno</h1>
      <button onClick={goToHistory}>Ver Histórico</button>
    </>
  );
}

export default Aluno;
