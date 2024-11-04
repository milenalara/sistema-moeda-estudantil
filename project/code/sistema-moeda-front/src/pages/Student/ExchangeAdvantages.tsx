import React, { useEffect, useState, useContext } from "react";
import axios, { AxiosError } from "axios";
import StudentAppBar from "./StudentAppBar";
import IAdvantage from "../../data/model/IAdvantage";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


const ExchangeAdvantages = () => {
  const [advantages, setAdvantages] = useState<IAdvantage[]>([]);
  
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "name", headerName: "Nome", width: 250 },
    { field: "description", headerName: "Descrição", width: 500 },
    { field: "cost", headerName: "Custo", width: 80 },
    { field: "company", headerName: "Empresa", width: 150 },
  ];

  const rows: GridRowsProp = advantages.map((advantage) => ({
        id: advantage.id,
        name: advantage.name,
        description: advantage.description,
        cost: advantage.cost,
        company: advantage.company.name
    }));
  
  
  useEffect(() => {
    const fetchAdvantages = async () => {
      try {
        const response = await axios.get<IAdvantage[]>(
          `http://localhost:8080/api/advantage`
        );
        console.log(response.data)
        setAdvantages(response.data);
      } catch (err: any) {
        const error = err as AxiosError;
        console.error(
          `Error: ${error.response?.data}\nStatus: ${error.response?.status} - ${error.code}`
        );
      }
    };

    fetchAdvantages();
  }, []);
  return (
    <div>
      <StudentAppBar />
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
