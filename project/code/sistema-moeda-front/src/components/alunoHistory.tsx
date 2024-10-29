import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
}

function AlunoHistory() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const res = await axios.get(`http://localhost:8080/api/transaction/${location.state.id}`);
    setTransactions(res.data);
  };

  const goToAluno = () => {
    navigate('/aluno', { state: { id: location.id } }); // Corrigido para usar location.state.id
  };

  return (
    <>
      <h1>Histórico de Transações</h1>
      <button onClick={goToAluno}>Voltar</button>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.date} - {transaction.description}: {transaction.amount} moedas
          </li>
        ))}
      </ul>
    </>
  );
}

export default AlunoHistory;
