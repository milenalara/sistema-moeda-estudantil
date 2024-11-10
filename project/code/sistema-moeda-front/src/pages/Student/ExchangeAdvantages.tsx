import React, { useEffect, useState, useContext } from "react";
import axios, { AxiosError } from "axios";
import StudentAppBar from "./StudentAppBar";
import Button from "@mui/material/Button";
import IStudent from "../../data/model/IStudent";
import IAdvantage from "../../data/model/IAdvantage";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { UserContext } from "../../context/UserContext";
import ITransaction from "../../data/model/ITransaction";

const ExchangeAdvantages = () => {
  const [advantages, setAdvantages] = useState<IAdvantage[]>([]);
  const [student, setStudent] = useState<IStudent | null>(null);
  const userContext = useContext(UserContext);

  useEffect(() => {
    const fetchAdvantages = async () => {
      try {
        const response = await axios.get<IAdvantage[]>(
          `http://localhost:8080/api/advantage`
        );
        setAdvantages(response.data);
      } catch (err: any) {
        const error = err as AxiosError;
        console.error(
          `Error: ${error.response?.data}\nStatus: ${error.response?.status} - ${error.code}`
        );
      }
    };

    fetchAdvantages();

    const fetchStudent = async () => {
      try {
        const response = await axios.get<IStudent>(
          `http://localhost:8080/api/student/${userContext?.userId}`
        );
        setStudent(response.data);
      } catch (err: any) {
        const error = err as AxiosError;
        console.error(
          `Error: ${error.response?.data}\nStatus: ${error.response?.status} - ${error.code}`
        );
      }
    };

    fetchStudent();
  }, [userContext?.userId]);

  const handleExchangePoints = (advantageId: number) => {
    if(!student) return;

    const advantage = advantages.find((advantage) => advantage.id === advantageId);
    if(!advantage) return;

    // calcula saldo após a troca
    const newBalance = student.balance - advantage.cost;

    // impede saldo negativo
    if(newBalance < 0) {
        alert("Saldo insuficiente");
        return;
    }

    const body: ITransaction = {
      studentId: student.id,
      advantageId: advantageId,
      studentBalance: newBalance,
      dateTime: new Date().toISOString()
    };

    console.log("body", body);

    // envia transação para o back-end
    try {
        const response = axios.post(`http://localhost:8080/api/advantage/exchange`, body);
        setStudent({...student, balance: newBalance});
        alert("Troca realizada com sucesso!");
    } catch (err) {
        const error = err as AxiosError;
        console.error(
          `Error: ${error.response?.data}\nStatus: ${error.response?.status} - ${error.code}`
        ); 
    }

  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "name", headerName: "Nome", width: 250 },
    { field: "description", headerName: "Descrição", width: 500 },
    { field: "cost", headerName: "Custo", width: 80 },
    { field: "company", headerName: "Empresa", width: 150 },
    {
      field: "exchange",
      headerName: "Trocar pontos",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleExchangePoints(params.id as number)}
        >
          Trocar
        </Button>
      ),
    },
  ];

  const rows: GridRowsProp = advantages.map((advantage) => ({
    id: advantage.id,
    name: advantage.name,
    description: advantage.description,
    cost: advantage.cost,
    company: advantage.company.name,
  }));

  return (
    <div>
      <StudentAppBar />
      Você tem pontos {student?.balance} para trocar
      <DataGrid rows={rows} columns={columns} />
      {/* {advantages.map((advantage) => (
        <div key={advantage.id}>
          <h2>{advantage.name}</h2>
          <p>descrição: {advantage.description}</p>
          <p>custo: {advantage.cost}</p>
          <p>empresa: {advantage.company?.name}</p>
        </div>
      ))} */}
    </div>
  );
};

export default ExchangeAdvantages;
