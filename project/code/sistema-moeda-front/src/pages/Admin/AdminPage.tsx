import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminAppBar from "./AdminAppBar";
import StudentCRUD from "./StudentCRUD/StudentCRUD";
import ProfessorCRUD from "./ProfessorCRUD/ProfessorCRUD";
import CompanyCRUD from "./CompanyCRUD/CompanyCRUD";
import AdminAluno from "../../components/AdminAluno";
import AdminAlunoEdit from "../../components/AdminAlunoEdit";
import AdminEmpresa from "../../components/AdminEmpresa";
import AdminEmpresaEdit from "../../components/AdminEmpresaEdit";
import AdminProfessor from "../../components/AdminProfessor";


const AdminPage = () => {
  return (
    <>
      <AdminAppBar />
      <Routes>
        {/* <Route path="/alunos" element={<StudentCRUD />} />
        <Route path="/professores" element={<ProfessorCRUD />} />
        <Route path="/empresas" element={<CompanyCRUD />} /> */}
        <Route path="/alunos" element={<AdminAluno />} />
        <Route path="/alunos/edit/:id" element={<AdminAlunoEdit />} />
        <Route path="/empresas" element={<AdminEmpresa />} />
        <Route path="/empresas/edit/:id" element={<AdminEmpresaEdit />} />
        <Route path="/professores" element={<AdminProfessor />}/>
      </Routes>
    </>
  );
};

export default AdminPage;
