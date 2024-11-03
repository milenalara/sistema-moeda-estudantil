import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridValueGetter } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import axios from "axios";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Nome", width: 130 },
  { field: "CPF", headerName: "CPF", width: 130 },
  { field: "RG", headerName: "RG", width: 130 },
  {
    field: "educationalInstitution",
    headerName: "Instituição Educacional",
    width: 280,
    valueGetter: (value, row) => {
      return row.educationalInstitution.name;
    },
  },
  {
    field: "course",
    headerName: "Curso",
    width: 280,
    valueGetter: (value, row) => {
      return row.course.name;
    },
  },
];

const paginationModel = { page: 0, pageSize: 10 };

const DataTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/student");
        const data = response.data.map((student: any) => ({
          id: student.id,
          name: student.name,
          cpf: student.CPF,
          rg: student.RG,
          educationalInstitution: {
            id: student.educationalInstitution.id,
            name: student.educationalInstitution.name,
          },
          course: {
            id: student.course.id,
            name: student.course.name,
          },
        }));
        setStudents(response.data);
        console.log("ESTUDANTES", response.data);
      } catch (error) {
        console.log("Error fetching students: ", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <Paper sx={{ height: '90%', width: "100%" }}>
      <DataGrid
        rows={students}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default DataTable;
