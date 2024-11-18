import React, { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridSlots,
} from "@mui/x-data-grid";
import IStudent from "../../../data/model/IStudent";
import axios, { AxiosError } from "axios";
import IEducationalInstitution from "../../../data/model/IEducationalInstitution";
import ICourse from "../../../data/model/ICourse";
import EditToolbar from "./EditToolbar";

const StudentCRUD = () => {
  const [students, setStudents] = useState<IStudent[]>([]);
  const [educationalInstitutions, setEducationalInstitutions] = useState<
    IEducationalInstitution[]
  >([]);
  const [courses, setCourses] = useState<ICourse[]>([]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 40, editable: false },
    { field: "name", headerName: "Name", width: 180, editable: true },
    { field: "email", headerName: "E-mail", width: 180, editable: true },
    { field: "CPF", headerName: "CPF", width: 100, editable: true },
    { field: "RG", headerName: "RG", width: 100, editable: true },
    {
      field: "balance",
      headerName: "Saldo",
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "educationalInstitution",
      headerName: "Instituição de Ensino",
      width: 300,
      editable: true,
      type: "singleSelect",
      valueOptions: educationalInstitutions.map((institution) => ({
        label: institution.name,
        value: institution.id,
      })),
      valueFormatter: (params: any) => {
        console.log("Educational Institution:", params);
        const institution = educationalInstitutions.find(
          (institution) => institution.id === params.id
        );
        return institution ? institution.name : "test 1";
      },
    },
    {
      field: "course",
      headerName: "Curso",
      width: 220,
      editable: true,
      type: "singleSelect",
      valueOptions: courses.map((course) => ({
        label: course.name,
        value: course.id,
      })),
      valueFormatter: (params: any) => {
        console.log("Course:", params);
        const course = courses.find((course)=> course.id === params.id);
        return course ? course.name : "test 2";
      }
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const [rows, setRows] = React.useState<GridRowsProp>([]);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );

  useEffect(() => {
    const updatedRows: GridRowsProp = students.map((student) => ({
      id: student.id,
      name: student.name,
      email: student.email,
      CPF: student.CPF,
      RG: student.RG,
      balance: student.balance,
      educationalInstitution: student.educationalInstitution,
      course: student.course,
    }));
    setRows(updatedRows);
  }, [students]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/student`);
        setStudents(response.data);
      } catch (err) {
        const error = err as AxiosError;
        console.error(
          `Error: ${error.response?.data}\nStatus: ${error.response?.status} - ${error.code}`
        );
      }
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    const fetchEducationalInstitutions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/educationalinstitution`
        );
        setEducationalInstitutions(response.data);
      } catch (err) {
        const error = err as AxiosError;
        console.error(
          `Error: ${error.response?.data}\nStatus: ${error.response?.status} - ${error.code}`
        );
      }
    };

    fetchEducationalInstitutions();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/course`);
        setCourses(response.data);
      } catch (err) {
        const error = err as AxiosError;
        console.error(
          `Error: ${error.response?.data}\nStatus: ${error.response?.status} - ${error.code}`
        );
      }
    };

    fetchCourses();
  }, []);

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar as GridSlots["toolbar"],
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 20 },
          },
        }}
        pageSizeOptions={[10, 20, 50, 100]}
      />
    </Box>
  );
};

export default StudentCRUD;
