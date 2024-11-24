import React from "react";
import { Routes, Route } from "react-router-dom";
import Professor from "../../components/Professor";
import ProfessorHistory from "../../components/ProfessorHistory";

const ProfessorPage = () => {
  return (
    <>
      <h1>ProfessorPage</h1>
      <Routes>
        <Route path="/" element={<Professor/>}/>
        <Route path="/historico" element={<ProfessorHistory />}/>
      </Routes>
    </>
  );
};

export default ProfessorPage;
