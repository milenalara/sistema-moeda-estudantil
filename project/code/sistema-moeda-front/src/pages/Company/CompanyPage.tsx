import React from "react";
import { Routes, Route } from "react-router-dom";
import Empresa from "../../components/Empresa";

const CompanyPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Empresa />} />
      </Routes>
    </>
  );
};

export default CompanyPage;
