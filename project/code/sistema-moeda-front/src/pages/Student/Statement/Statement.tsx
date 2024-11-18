import { useEffect, useState, useContext } from "react";
import axios, { AxiosError } from "axios";
import Button from "@mui/material/Button";
import IAdvantage from "../../../data/model/IAdvantage";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { UserContext } from "../../../context/UserContext";
import ITransactionResponse from "../../../data/model/ITransactionResponse";
import { useStudent } from "../../../context/StudentContext";
import { width } from "@mui/system";

const Statement = () => {
  const [transactions, setTransactions] = useState<ITransactionResponse[]>([]);
  const [advantages, setAdvantages] = useState<IAdvantage[]>([]);
  const userContext = useContext(UserContext);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get<ITransactionResponse[]>(
          `http://localhost:8080/api/transaction/${userContext?.userId}`
        );
        console.log(response.data);
        setTransactions(response.data);
      } catch (err) {
        const error = err as AxiosError;
        console.error(
          `Error: ${error.response?.data}\nStatus: ${error.response?.status} - ${error.code}`
        );
      }
    };

    fetchTransactions();
  }, [userContext?.userId]);

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

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "origin",
      headerName: "Origem",
      width: 600,
      renderCell: (params) => {
        const advantage = params.value;
        return (
          <span>
            {advantage
              ? `Vantagem: ${advantage.name} - Empresa: ${advantage.company.name}`
              : ""}
          </span>
        );
      },
    },
    {
      field: "value",
      headerName: "Valor",
      width: 100,
      renderCell: (params) => {
        const advantage = params.value;
        return <span>{advantage.cost * -1}</span>;
      },
    },
    { field: "balance", headerName: "Saldo", width: 100 },
  ];

  const rows: GridRowsProp = transactions.map((transaction) => ({
    id: transaction.id,
    origin: advantages.find(
      (advantage) => advantage.id === transaction.advantageId
    ),
    value: advantages.find(
      (advantage) => advantage.id === transaction.advantageId
    ),
    balance: transaction.balance,
  }));

  return (
    <>
      <DataGrid rows={rows} columns={columns} />
    </>
  );
};

export default Statement;
