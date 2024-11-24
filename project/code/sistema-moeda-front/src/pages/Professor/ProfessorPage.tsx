import React from "react";
import { Routes, Route } from "react-router-dom";
import Professor from "../../components/Professor";

const ProfessorPage = () => {
  return (
    <>
      <h1>ProfessorPage</h1>
      <Routes>
        <Route path="/" element={<Professor/>}/>
      </Routes>
    </>
  );
};

export default ProfessorPage;
