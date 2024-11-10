import { useEffect, useState, useContext } from "react";
import axios, { AxiosError } from "axios";
import Button from "@mui/material/Button";
import IAdvantage from "../../data/model/IAdvantage";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { UserContext } from "../../context/UserContext";
import ITransaction from "../../data/model/ITransaction";
import { useStudent } from "../../context/StudentContext";

const ExchangeAdvantages = () => {
  const [advantages, setAdvantages] = useState<IAdvantage[]>([]);
  const userContext = useContext(UserContext);
  const { student, refreshStudent } = useStudent();

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
  }, [userContext?.userId]);

  const handleExchangePoints = async (advantageId: number) => {
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
      id: 1,
      studentId: student.id,
      advantageId: advantageId,
      cost: advantage.cost,

      dateTime: new Date().toISOString()
    };

    // envia transação para o back-end
    try {
        const response = await axios.post(`http://localhost:8080/api/advantage/exchange`, body);
        await refreshStudent();
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
      <DataGrid 
        rows={rows} 
        columns={columns} 
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20, 50, 100]}
      />
    </div>
  );
};

export default ExchangeAdvantages;
