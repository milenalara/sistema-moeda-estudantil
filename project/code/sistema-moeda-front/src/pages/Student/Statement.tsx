import { useEffect, useState, useContext } from "react";
import axios, { AxiosError } from "axios";
import Button from "@mui/material/Button";
import IAdvantage from "../../data/model/IAdvantage";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { UserContext } from "../../context/UserContext";
import ITransaction from "../../data/model/ITransaction";
import { useStudent } from "../../context/StudentContext";

const Statement = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const userContext = useContext(UserContext);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get<ITransaction[]>(
          `http://localhost:8080/api/transaction/${userContext?.userId}`
        );
        console.log(response.data)
        setTransactions(response.data);
      } catch (err) {
        const error = err as AxiosError;
        console.error(
          `Error: ${error.response?.data}\nStatus: ${error.response?.status} - ${error.code}`
        );
      }
    };

    fetchTransactions();
  }, []);
  return (
    <>
    </>
  );
};

export default Statement;
