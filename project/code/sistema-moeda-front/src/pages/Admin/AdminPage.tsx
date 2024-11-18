import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminAppBar from "./AdminAppBar";
import StudentCRUD from "./StudentCRUD/StudentCRUD";
import ProfessorCRUD from "./ProfessorCRUD/ProfessorCRUD";
import CompanyCRUD from "./CompanyCRUD/CompanyCRUD";
import styled from "styled-components";

const AdminPage = () => {
  return (
    <>
      <AdminAppBar />
      <Routes>
        <Route path="/alunos" element={<StudentCRUD />} />
        <Route path="/professores" element={<ProfessorCRUD />} />
        <Route path="/empresas" element={<CompanyCRUD />} />
      </Routes>
    </>
  );
};

export default AdminPage;
